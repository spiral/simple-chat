<?php

declare(strict_types=1);

namespace App\Endpoint\Web\Filter;

use Spiral\Filters\Attribute\Input\Post;
use Spiral\Filters\Model\Filter;
use Spiral\Filters\Model\FilterDefinitionInterface;
use Spiral\Filters\Model\HasFilterDefinition;
use Spiral\Validator\FilterDefinition;

final class LoginRequest extends Filter implements HasFilterDefinition
{
    #[Post]
    public string $username;

    #[Post]
    public string $password;

    public function filterDefinition(): FilterDefinitionInterface
    {
        return new FilterDefinition([
            'username' => ['notEmpty', 'string'],
            'password' => ['notEmpty', 'string'],
        ]);
    }
}
