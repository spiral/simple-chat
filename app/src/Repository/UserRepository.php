<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\User;
use Cycle\ORM\Select\Repository;

final class UserRepository extends Repository
{
    /**
     * Find user by username.
     */
    public function findByUsername(string $username): ?User
    {
        return $this->findOne(['username' => $username]);
    }
}