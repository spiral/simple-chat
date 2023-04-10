<?php

declare(strict_types=1);

namespace Database\Seeder;

use Database\Factory\MessageFactory;
use Database\Factory\ThreadFactory;
use Database\Factory\UserFactory;
use Spiral\DatabaseSeeder\Seeder\AbstractSeeder;

final class ThreadTableSeeder extends AbstractSeeder
{
    public function run(): \Generator
    {
        yield ThreadFactory::new(['name' => 'First thread'])->makeOne();
    }
}