<?php

declare(strict_types=1);

namespace App\Application\Exception;

use Throwable;

class UserNotFoundException extends AuthenticationException
{
    public function __construct(
        string $message = "User not found!",
        int $code = 0,
        ?Throwable $previous = null,
    ) {
        parent::__construct($message, $code, $previous);
    }
}
