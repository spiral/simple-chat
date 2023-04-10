<?php

declare(strict_types=1);

namespace App\Endpoint\Centrifugo;

use App\Entity\Message;
use App\Entity\User;
use RoadRunner\Centrifugo\Payload\RPCResponse;
use RoadRunner\Centrifugo\Request\RequestInterface;
use RoadRunner\Centrifugo\Request\RPC;
use Spiral\Core\InvokerInterface;
use Spiral\Prototype\Traits\PrototypeTrait;
use Spiral\RoadRunnerBridge\Centrifugo\ServiceInterface;

final class RPCService implements ServiceInterface
{
    use PrototypeTrait;

    public function __construct(
        private readonly InvokerInterface $invoker,
    ) {
    }

    /**
     * @param RPC $request
     */
    public function handle(RequestInterface $request): void
    {
        $result = match ($request->method) {
            'thread:history' => $this->invoker->invoke(
                [$this, 'threadHistory'],
                $request->getData(),
            ),
            'thread:publish' => $this->invoker->invoke(
                [$this, 'threadNewMessage'],
                $request->getData(),
            ),
            default => ['error' => 'Not found', 'code' => 404]
        };

        try {
            $request->respond(new RPCResponse(data: $result));
        } catch (\Throwable $e) {
            $request->error($e->getCode(), $e->getMessage());
        }
    }

    private function threadNewMessage(
        int $id,
        string $message,
    ): array {
        $thread = $this->threads->findByPK($id);

        /** @var User $user */
        $user = $this->auth->getActor();

        $message = new Message($thread, $user, $message);
        $this->entityManager->persist($message)->run();

        $this->broadcast->publish(
            'chat',
            \json_encode([
                'type' => 'message',
                'message' => $message,
                'thread' => $thread,
            ]),
        );

        return ['message' => $message, 'thread' => $thread];
    }

    private function threadHistory(int $id): array
    {
        return ['messages' => $this->messages->findAllByThread($id)];
    }
}
