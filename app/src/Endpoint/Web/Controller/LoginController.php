<?php

declare(strict_types=1);

namespace App\Endpoint\Web\Controller;

use App\Application\Exception\InvalidCredentialsException;
use App\Application\Exception\UserNotFoundException;
use App\Endpoint\Web\Filter\LoginRequest;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Spiral\Prototype\Traits\PrototypeTrait;
use Spiral\Router\Annotation\Route;

final class LoginController
{
    use PrototypeTrait;

    #[Route('/login', methods: ['GET'])]
    public function loginForm(ServerRequestInterface $request): ResponseInterface|string
    {
        if ($this->auth->getActor()) {
            return $this->response->redirect('/');
        }

        return $this->views->render('login', [
            'csrf' => $request->getAttribute('csrfToken'),
            'errors' => $this->errors->getErrors(),
        ]);
    }

    #[Route('/login', methods: ['POST'])]
    public function login(LoginRequest $filter): ResponseInterface
    {
        $user = $this->users->findByUsername($filter->username);
        if (!$user) {
            throw new UserNotFoundException();
        }

        if (!$user->verifyPassword($filter->password)) {
            throw new InvalidCredentialsException();
        }

        $token = $this->authTokens->create($user->jsonSerialize());
        $this->auth->start($token);

        return $this->response->redirect('/');
    }
}
