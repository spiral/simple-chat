<?php

declare(strict_types=1);

namespace App\Endpoint\Centrifugo;

use App\Entity\User;
use RoadRunner\Centrifugo\Payload\ConnectResponse;
use RoadRunner\Centrifugo\Request\Connect;
use RoadRunner\Centrifugo\Request\RequestInterface;
use Spiral\Auth\ActorProviderInterface;
use Spiral\Prototype\Traits\PrototypeTrait;
use Spiral\RoadRunnerBridge\Centrifugo\ServiceInterface;

final class ConnectService implements ServiceInterface
{
    use PrototypeTrait;

    public function __construct(
        private readonly ActorProviderInterface $actorProvider,
    ) {
    }

    /** @param Connect $request */
    public function handle(RequestInterface $request): void
    {
        try {
            // Authenticate user with a given token from the connection request
            $authToken = $request->getData()['authToken'] ?? null;
            if ($authToken && $user = $this->getActor($authToken)) {
                $userId = $user->getId();
                $channels = $user->getChannels();
            } else {
                $request->error(403, 'Forbidden');
                return;
            }

            $request->respond(
                new ConnectResponse(
                    user: (string)$userId,
                    data: ['user' => $user->jsonSerialize()],
                    channels: $channels,
                ),
            );
        } catch (\Throwable $e) {
            $request->error($e->getCode(), $e->getMessage());
        }
    }

    public function getActor(?string $authToken): ?User
    {
        if ($authToken && $token = $this->authTokens->load($authToken)) {
            return $this->actorProvider->getActor($token);
        }

        return null;
    }
}
