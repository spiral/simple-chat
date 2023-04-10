<?php

declare(strict_types=1);

namespace Database\Factory;

use App\Entity\Message;
use Spiral\DatabaseSeeder\Factory\AbstractFactory;

class MessageFactory extends AbstractFactory
{
    public function makeEntity(array $definition): object
    {
        return new Message(
            $definition['thread'],
            $definition['user'],
            $definition['text'],
        );
    }

    public function entity(): string
    {
        return Message::class;
    }

    public function definition(): array
    {
        return [
            'thread' => fn (ThreadFactory $factory) => $factory->make(),
            'user' => fn (UserFactory $factory) => $factory->make(),
            'text' => $this->faker->paragraph,
        ];
    }
}