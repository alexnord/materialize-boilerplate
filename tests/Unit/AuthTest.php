<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthTest extends TestCase
{
    /**
     * Test a successful login
     *
     * @return void
     */
    public function testCanLogin()
    {
        $response = $this->post('api/auth/login', [
            'email' => 'admin@test.com',
            'password' => 'password',
        ]);

        $response->assertJsonStructure([
            'access_token',
            'token_type',
            'expires_in',
        ]);
    }

    /**
     * Test a failed login with bad credentials.
     *
     * @return void
     */
    public function testFailedLogin()
    {
        $response = $this->post('api/auth/login', [
            'email' => 'admin@test.com',
            'password' => 'badpassword',
        ]);

        $response
            ->assertStatus(401)
            ->assertJson(['error' => 'Unauthorized']);
    }
}
