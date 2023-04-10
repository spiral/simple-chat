<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Message;
use Cycle\ORM\Select\Repository;

final class MessageRepository extends Repository
{
    /**
     * Find all messages by thread id.
     *
     * @return Message[]
     */
    public function findAllByThread(int $threadId): array
    {
        return $this->findAll([
            'thread_id' => $threadId,
        ], [
            'id' => 'ASC',
        ]);
    }
}