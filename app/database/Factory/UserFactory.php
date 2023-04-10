<?php

declare(strict_types=1);

namespace Database\Factory;

use App\Entity\User;
use Spiral\DatabaseSeeder\Factory\AbstractFactory;

final class UserFactory extends AbstractFactory
{
    public function entity(): string
    {
        return User::class;
    }

    public function makeEntity(array $definition): User
    {
        return new User(
            username: $definition['username'],
            password: $definition['password'],
        );
    }

    public function definition(): array
    {
        return [
            'username' => $this->faker->userName,
            'password' => \password_hash('secret', \PASSWORD_BCRYPT),
        ];
    }
}