<?php

declare(strict_types=1);

namespace Database\Factory;

use App\Entity\Thread;
use Spiral\DatabaseSeeder\Factory\AbstractFactory;

final class ThreadFactory extends AbstractFactory
{
    public function entity(): string
    {
        return Thread::class;
    }

    public function makeEntity(array $definition): Thread
    {
        return new Thread(
            name: $definition['name']
        );
    }

    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence,
        ];
    }
}