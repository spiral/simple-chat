<?php

declare(strict_types=1);

namespace Database\Seeder;

use Database\Factory\UserFactory;
use Spiral\DatabaseSeeder\Seeder\AbstractSeeder;

final class UserTableSeeder extends AbstractSeeder
{
    public function run(): \Generator
    {
        yield UserFactory::new(['username' => 'john'])->makeOne();
        yield UserFactory::new(['username' => 'bill'])->makeOne();
    }
}