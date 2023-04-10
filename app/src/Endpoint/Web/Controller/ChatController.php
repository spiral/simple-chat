<?php

declare(strict_types=1);

namespace App\Endpoint\Web\Controller;

use Spiral\Prototype\Traits\PrototypeTrait;
use Spiral\Router\Annotation\Route;

final class ChatController
{
    use PrototypeTrait;

    #[Route('/', group: 'auth')]
    public function index(): string
    {
        return $this->views->render('chat', [
            'token' => $this->auth->getToken()->getID(),
        ]);
    }
}
