<?php

declare(strict_types=1);

use Cycle\Database\Config;

return [
    'default' => env('DB_CONNECTION', 'default'),
    'databases' => [
        'default' => [
            'driver' => 'runtime',
        ],
    ],
    'drivers' => [
        'runtime' => new Config\PostgresDriverConfig(
            connection: new Config\Postgres\TcpConnectionConfig(
                database: env('DB_DATABASE', 'homestead'),
                user: env('DB_USERNAME', 'homestead'),
                password: env('DB_PASSWORD', 'secret'),
                port: (int) env('DB_PORT', 5432),
            ),
            queryCache: true
        ),
    ],
];
