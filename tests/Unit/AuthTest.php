<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;

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

    /**
     * Test logout.
     *
     * @return void
     */
    public function testLogout()
    {
        $token = JWTAuth::fromUser(User::first());

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token
        ])
        ->json('POST', '/api/auth/logout', []);

        $response
            ->assertStatus(200)
            ->assertJson(['message' => 'Successfully logged out']);
    }
}
