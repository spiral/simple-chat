<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\ThreadRepository;
use Cycle\Annotated\Annotation as Cycle;
use Doctrine\Common\Collections\ArrayCollection;

#[Cycle\Entity(repository: ThreadRepository::class)]
class Thread implements \JsonSerializable
{
    #[Cycle\Column(type: 'primary')]
    private int $id;

    #[Cycle\Relation\HasMany(target: Message::class)]
    private ArrayCollection $messages;

    public function __construct(
        #[Cycle\Column(type: "string")]
        private string $name,
    ) {
        $this->messages = new ArrayCollection();
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function jsonSerialize(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
        ];
    }
}