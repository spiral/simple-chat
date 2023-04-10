<?php

declare(strict_types=1);

namespace App\Application\Bootloader;

use App\Entrypoint\Centrifugo\UserActor;
use Spiral\Boot\Bootloader\Bootloader;
use Spiral\Bootloader\Auth\AuthBootloader;

final class AuthenticationBootloader extends Bootloader
{
    public function init(AuthBootloader $auth): void
    {
        $auth->addActorProvider(UserActor::class);
    }
}