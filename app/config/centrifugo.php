<?php

use App\Entrypoint\Centrifugo\AuthenticatorInterceptor;
use App\Entrypoint\Centrifugo\ConnectService;
use App\Entrypoint\Centrifugo\RPCService;
use RoadRunner\Centrifugo\Request\RequestType;

return [
    'services' => [
        RequestType::Connect->value => ConnectService::class,
        RequestType::RPC->value => RPCService::class,
    ],
    'interceptors' => [
        RequestType::RPC->value => [
            AuthenticatorInterceptor::class,
        ],
    ],
];