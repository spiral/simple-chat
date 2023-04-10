<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\UserRepository;
use Cycle\Annotated\Annotation as Cycle;

#[Cycle\Entity(repository: UserRepository::class)]
#[Cycle\Table\Index(columns: ['username'], unique: true)]
class User implements \JsonSerializable
{
    #[Cycle\Column(type: 'primary')]
    private int $id;

    public function __construct(
        #[Cycle\Column(type: "string")]
        private string $username,
        #[Cycle\Column(type: "string")]
        private string $password,
    ) {
    }

    public function jsonSerialize(): array
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
        ];
    }

    public function verifyPassword(string $password): bool
    {
        return \password_verify($password, $this->password);
    }

    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @return array<non-empty-string>
     */
    public function getChannels(): array
    {
        return ['chat'];
    }
}