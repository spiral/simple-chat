<?php

declare(strict_types=1);

namespace App\Endpoint\Centrifugo;

use Spiral\Auth\ActorProviderInterface;
use Spiral\Auth\TokenInterface;
use Spiral\Prototype\Traits\PrototypeTrait;

class UserActor implements ActorProviderInterface
{
    use PrototypeTrait;

    public function getActor(TokenInterface $token): ?object
    {
        if (!isset($token->getPayload()['id'])) {
            return null;
        }

        return $this->users->findByPK($token->getPayload()['id']);
    }
}
