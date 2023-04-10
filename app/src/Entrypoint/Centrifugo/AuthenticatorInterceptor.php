<?php

declare(strict_types=1);

namespace App\Entrypoint\Centrifugo;

use Psr\EventDispatcher\EventDispatcherInterface;
use RoadRunner\Centrifugo\Request\RequestInterface;
use Spiral\Auth\ActorProviderInterface;
use Spiral\Auth\AuthContext;
use Spiral\Auth\AuthContextInterface;
use Spiral\Core\CoreInterceptorInterface;
use Spiral\Core\CoreInterface;
use Spiral\Core\ScopeInterface;
use Spiral\Prototype\Traits\PrototypeTrait;

final class AuthenticatorInterceptor implements CoreInterceptorInterface
{
    use PrototypeTrait;

    public function __construct(
        private readonly ScopeInterface $scope,
        private readonly ActorProviderInterface $actorProvider,
        private readonly ?EventDispatcherInterface $eventDispatcher = null,
    ) {
    }

    public function process(string $controller, string $action, array $parameters, CoreInterface $core): mixed
    {
        $request = $parameters['request'];
        \assert($request instanceof RequestInterface);

        $authToken = $request->getData()['authToken'] ?? null;

        if (!$authToken || !$token = $this->authTokens->load($authToken)) {
            $request->error(403, 'Unauthorized');
            return null;
        }

        $auth = new AuthContext($this->actorProvider, $this->eventDispatcher);
        $auth->start($token);

        if ($auth->getActor() === null) {
            $request->error(403, 'Unauthorized');
            return null;
        }

        return $this->scope->runScope([
            AuthContextInterface::class => $auth,
        ], fn () => $core->callAction($controller, $action, $parameters));
    }
}