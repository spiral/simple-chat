<?php

declare(strict_types=1);

namespace App\Endpoint\Web;

use Spiral\Prototype\Annotation\Prototyped;
use Spiral\Prototype\Traits\PrototypeTrait;

#[Prototyped(property: 'errors')]
final class SessionErrorsScope
{
    use PrototypeTrait;

    public function clear(): void
    {
        $this->session->getSection('errors')->clear();
    }

    /**
     * @return array<non-empty-string, non-empty-string[]>
     */
    public function getErrors(): array
    {
        return $this->session->getSection('errors')->getAll();
    }

    /**
     * @param non-empty-string $key
     * @param non-empty-string $error
     */
    public function addError(string $key, string $error): void
    {
        $this->session->getSection('errors')->set($key, $error);
    }
}
