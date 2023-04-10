# A real-time chat application

Hello developer! Welcome to your new awesome demo application built with the Spiral framework.

Real-time chat applications have become increasingly popular in recent years, and implementing WebSocket servers to
enable bidirectional communication has become essential for building such applications. However, creating this kind of
can be a challenging task.

Fortunately, there are new frameworks and tools available that make it easier to set up WebSocket servers. In this
tutorial, we will demonstrate how to create a real-time chat application using the Spiral Framework, RoadRunner, and
Centrifugo with authentication and bidirectional communication.

Spiral Framework offers an array of seamlessly integrated components, which makes it an ideal choice for building
complex applications. In this tutorial, we will guide you on creating a simple real-time chat application using Spiral
Framework, Centrifugo, RoadRunner, and ORM.

You can find a tutorial on how to build this application on the Spiral
website - [Real-time chat application](https://spiral.dev/docs/cookbook-simple-chat)

## Run the application

To start HTTP server using RoadRunner, run the following command in your project directory:

```bash
./rr serve
```

Open the application in your browser: http://127.0.0.1:8080 and use `bill` or `john` as a username and `secret` as a
password to login. After authentication, you will be redirected to the chat page where you can send messages to the
server.

> **Note**:
> For more information on how to use RoadRunner with Spiral, please consult
> the [official documentation](https://spiral.dev/docs/start-server).


To help you get started, we've provided some instructions for configuring the individual packages that were installed.
Depending on the packages you chose during the installation, you'll find the following next steps:

## Next Steps

## Configuration

1. Please, configure the environment variables in the `.env` file at the application's root.
2. Read documentation about Spiral Framework: https://spiral.dev/docs

### RoadRunnerBridge

1. The settings for RoadRunner are in a file named `.rr.yaml` at the main folder of the app.
2. Documentation: https://spiral.dev/docs/start-server

### CycleBridge

1. Database configuration file: `app/config/database.php`
2. Migrations configuration file: `app/config/migration.php`
3. Cycle ORM configuration file: `app/config/cycle.php`
4. Documentation: https://spiral.dev/docs/basics-orm

## Console commands

### Download or update RoadRunner

Allows to install the latest version of the RoadRunner compatible with your environment (operating system, processor
architecture, runtime, etc...).

```bash
composer rr:download
# or
./vendor/bin/rr get-binary
```

## Project Structure

If you chose to install the default application skeleton, your project will have the following directory structure:

```
- Endpoint
    - Web
        - UserController.php
        - Filter
            - ...
        - Middleware
            - ...
        - Interceptor
            - ...
        - routes.php
    - Centrifugo
        - Interceptor
            - AuthenticatorInterceptor.php
        - ConnectService.php
        - ...
- Application
    - Bootloader
        - RoutesBootloader.php
        - UserModuleBootloader.php
    - Exception
        - SomeException.php
    - Kernel.php
- Entity
    - User.php
- Repository
    - UserRepositoryInterface.php
```

#### Here's a brief explanation of the directories and files in this structure:

- **Endpoint**: This directory contains the entry points for your application, including HTTP endpoints (in the Web
  subdirectory), command-line interfaces (in the Console subdirectory), and gRPC services (in the RPC subdirectory).

- **Application**: This directory contains the core of your application, including the Kernel class that boots your
  application, the Bootloader classes that register services with the container, and the Exception directory that
  contains exception handling logic.

The project structure we provided is a common structure used in many PHP applications, and it can serve as a starting
point for your projects By following this structure, you can organize your code in a logical and maintainable
way, making it easier to build and scale your applications over time. Of course, you may need to make adjustments to fit
the specific needs of your project, but this structure provides a solid foundation for most applications.

**Good luck with your project!**

## Useful resources

- [**Spiral Framework documentation**](https://spiral.dev/docs)
- [**RoadRunner documentation**](https://roadrunner.dev/docs)
- [Community packages](https://github.com/spiral-packages).
- [Birddog](https://github.com/roadrunner-server/birddog) — OpenSource tool for monitoring RoadRunner instances.
- [Support us](https://github.com/sponsors/roadrunner-server)
- [Contributing](https://spiral.dev/docs/about-contributing/)

## Support

If you have any questions or need help with the project, please don't hesitate to reach out! You can find us on Discord
at the following link:

[Discord Server](https://discord.gg/TFeEmCs)

Alternatively, you can create an issue on GitHub to report a bug or request a feature:

[Create an Issue on GitHub](https://github.com/spiral/framework/issues/new/choose)

We welcome any feedback or suggestions you may have, and are always happy to help troubleshoot any issues you may
encounter.
