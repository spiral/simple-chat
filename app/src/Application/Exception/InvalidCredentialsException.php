<?php

declare(strict_types=1);

namespace App\Application\Exception;

use Throwable;

class InvalidCredentialsException extends AuthenticationException
{
    public function __construct(
        string $message = "Invalid username or password",
        int $code = 0,
        ?Throwable $previous = null,
    ) {
        parent::__construct($message, $code, $previous);
    }
}
