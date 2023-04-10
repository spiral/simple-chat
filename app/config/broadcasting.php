<?php

declare(strict_types=1);

return [
    'connections' => [
        'centrifugo' => [
            'driver' => env('BROADCAST_CONNECTION', 'centrifugo'),
        ],
    ],
];
