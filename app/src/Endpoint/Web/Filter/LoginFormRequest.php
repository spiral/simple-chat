<?php

declare(strict_types=1);

namespace App\Endpoint\Web\Filter;

use Spiral\Filters\Attribute\Input\Attribute;
use Spiral\Filters\Model\Filter;

final class LoginFormRequest extends Filter
{
    #[Attribute]
    public string $csrfToken = '';
}
