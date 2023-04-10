<?php

use App\Endpoint\Centrifugo\ConnectService;
use App\Endpoint\Centrifugo\Interceptor\AuthenticatorInterceptor;
use App\Endpoint\Centrifugo\RPCService;
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
