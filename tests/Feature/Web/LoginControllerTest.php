<?php

declare(strict_types=1);

namespace Tests\Feature\Web;

use Spiral\Testing\Http\FakeHttp;
use Tests\TestCase;

class LoginControllerTest extends TestCase
{
    private FakeHttp $http;

    protected function setUp(): void
    {
        parent::setUp();
        $this->http = $this->fakeHttp();
    }

    public function testValidateLoginData(): void
    {
        $response = $this->http->post('/login', [
            'username' => 'admin',
        ]);

        $response->assertStatus(200);
    }
}