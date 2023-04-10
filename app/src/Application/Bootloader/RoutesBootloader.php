<?php

declare(strict_types=1);

namespace App\Application\Bootloader;

use App\Entrypoint\Web\Middleware\HandleAuthenticationExceptions;
use Nyholm\Psr7\Uri;
use Spiral\Auth\Middleware\AuthMiddleware;
use Spiral\Auth\Middleware\Firewall\RedirectFirewall;
use Spiral\Bootloader\Http\RoutesBootloader as BaseRoutesBootloader;
use Spiral\Cookies\Middleware\CookiesMiddleware;
use Spiral\Core\Container\Autowire;
use Spiral\Csrf\Middleware\CsrfMiddleware;
use Spiral\Debug\StateCollector\HttpCollector;
use Spiral\Filter\ValidationHandlerMiddleware;
use Spiral\Http\Middleware\ErrorHandlerMiddleware;
use Spiral\Http\Middleware\JsonPayloadMiddleware;
use Spiral\Router\Bootloader\AnnotatedRoutesBootloader;
use Spiral\Session\Middleware\SessionMiddleware;

/**
 * A bootloader that configures the application's routes and middleware.
 *
 * @link https://spiral.dev/docs/http-routing
 */
final class RoutesBootloader extends BaseRoutesBootloader
{
    protected const DEPENDENCIES = [
        AnnotatedRoutesBootloader::class,
    ];

    protected function globalMiddleware(): array
    {
        return [
            ErrorHandlerMiddleware::class,
            JsonPayloadMiddleware::class,
            HttpCollector::class,
            ValidationHandlerMiddleware::class,
        ];
    }

    protected function middlewareGroups(): array
    {
        return [
            'web' => [
                CookiesMiddleware::class,
                SessionMiddleware::class,
                CsrfMiddleware::class,
                AuthMiddleware::class,
                HandleAuthenticationExceptions::class,
            ],
            'auth' => [
                'middleware:web',
                new Autowire(RedirectFirewall::class, [
                    'uri' => new Uri('/login'),
                    'status' => 302,
                ]),
            ],
        ];
    }
}
