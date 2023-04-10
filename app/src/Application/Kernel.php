<?php

declare(strict_types=1);

namespace App\Application;

use App\Application\Bootloader\AuthenticationBootloader;
use App\Application\Bootloader\ExceptionHandlerBootloader;
use App\Application\Bootloader\LoggingBootloader;
use App\Application\Bootloader\RoutesBootloader;
use Spiral\Boot\Bootloader\CoreBootloader;
use Spiral\Bootloader as Framework;
use Spiral\Cycle\Bootloader as CycleBridge;
use Spiral\DatabaseSeeder\Bootloader\DatabaseSeederBootloader;
use Spiral\DotEnv\Bootloader\DotenvBootloader;
use Spiral\Monolog\Bootloader\MonologBootloader;
use Spiral\Nyholm\Bootloader\NyholmBootloader;
use Spiral\Prototype\Bootloader\PrototypeBootloader;
use Spiral\RoadRunnerBridge\Bootloader as RoadRunnerBridge;
use Spiral\Scaffolder\Bootloader\ScaffolderBootloader;
use Spiral\Stempler\Bootloader\StemplerBootloader;
use Spiral\Tokenizer\Bootloader\TokenizerListenerBootloader;
use Spiral\Validation\Bootloader\ValidationBootloader;
use Spiral\Validator\Bootloader\ValidatorBootloader;
use Spiral\Views\Bootloader\ViewsBootloader;
use Spiral\YiiErrorHandler\Bootloader\YiiErrorHandlerBootloader;

class Kernel extends \Spiral\Framework\Kernel
{
    protected const SYSTEM = [
        CoreBootloader::class,
        TokenizerListenerBootloader::class,
        DotenvBootloader::class,
    ];

    protected const LOAD = [
        // Logging and exceptions handling
        MonologBootloader::class,
        YiiErrorHandlerBootloader::class,
        ExceptionHandlerBootloader::class,

        // Application specific logs
        LoggingBootloader::class,

        // RoadRunner
        RoadRunnerBridge\LoggerBootloader::class,
        RoadRunnerBridge\HttpBootloader::class,
        RoadRunnerBridge\CentrifugoBootloader::class,

        // Core Services
        Framework\SnapshotsBootloader::class,

        // Security and validation
        Framework\Security\EncrypterBootloader::class,
        Framework\Security\FiltersBootloader::class,
        Framework\Security\GuardBootloader::class,

        // HTTP extensions
        Framework\Auth\HttpAuthBootloader::class,
        Framework\Http\RouterBootloader::class,
        Framework\Http\JsonPayloadsBootloader::class,
        Framework\Http\CookiesBootloader::class,
        Framework\Http\SessionBootloader::class,
        Framework\Http\CsrfBootloader::class,
        NyholmBootloader::class,

        // Databases
        CycleBridge\DatabaseBootloader::class,
        CycleBridge\MigrationsBootloader::class,

        // ORM
        CycleBridge\AuthTokensBootloader::class,
        CycleBridge\SchemaBootloader::class,
        CycleBridge\CycleOrmBootloader::class,
        CycleBridge\AnnotatedBootloader::class,

        ValidationBootloader::class,
        ValidatorBootloader::class,

        // Views
        ViewsBootloader::class,
        StemplerBootloader::class,

        // Console commands
        Framework\CommandBootloader::class,
        RoadRunnerBridge\CommandBootloader::class,
        CycleBridge\CommandBootloader::class,
        ScaffolderBootloader::class,
        CycleBridge\ScaffolderBootloader::class,

        // Configure route groups, middleware for route groups
        RoutesBootloader::class,

        // Fast code prototyping
        PrototypeBootloader::class,
        CycleBridge\PrototypeBootloader::class,

        DatabaseSeederBootloader::class,
    ];

    protected const APP = [
        AuthenticationBootloader::class,
    ];
}
