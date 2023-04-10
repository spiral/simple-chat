<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\MessageRepository;
use Cycle\Annotated\Annotation as Cycle;

#[Cycle\Entity(repository: MessageRepository::class)]
class Message implements \JsonSerializable
{
    #[Cycle\Column(type: 'primary')]
    private int $id;

    public function __construct(
        #[Cycle\Relation\BelongsTo(target: Thread::class)]
        private Thread $thread,
        #[Cycle\Relation\BelongsTo(target: User::class)]
        private User $user,
        #[Cycle\Column(type: "text")]
        private string $text,
    ) {
    }

    public function jsonSerialize(): array
    {
        return [
            'id' => $this->id,
            'user' => $this->user,
            'text' => $this->text,
        ];
    }
}