<?php

declare(strict_types=1);

namespace App\Endpoint\Web\Middleware;

use App\Application\Exception\AuthenticationException;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Spiral\Prototype\Traits\PrototypeTrait;

final class HandleAuthenticationExceptions implements MiddlewareInterface
{
    use PrototypeTrait;

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        try {
            $response = $handler->handle($request);

            $this->errors->clear();

            return $response;
        } catch (AuthenticationException $e) {
            $this->errors->addError('username', $e->getMessage());

            return $this->response->redirect('/login');
        }
    }
}
