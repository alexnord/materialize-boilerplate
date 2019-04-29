<?php

namespace Tests\Feature;

use Tests\TestCase;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;

class UserTest extends TestCase
{
    /**
     * Test if users can be queried.
     *
     * @return void
     */
    public function testCanGetUsers()
    {
        $response = $this->post('/graphql', [
            'query' => "{
              users {
                id
                name
                email
              }
            }"
        ]);

        $response
            ->assertStatus(200)
            ->assertJson($this->getUsersResponse());
    }

    /**
     * Test if user can be udpated.
     *
     * @return void
     */
    public function testCanUpdateUser()
    {
        $token = JWTAuth::fromUser(User::first());

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token
        ])
        ->json('POST', '/graphql', [
            'query' => "mutation qUpdateUser{
              updateUser(id: 1, name: \"Changed Name\") {
                id
                email
                name
              }
            }"
        ]);

        $response
            ->assertStatus(200)
            ->assertJson($this->updateUsersResponse());
    }

    private function getUsersResponse()
    {
        return [
          "data" => [
            "users" => [
              [
                "id" => 1,
                "name" => "Testy McTesterson",
                "email" => "admin@test.com"
              ]
            ]
          ]
        ];
    }

    private function updateUsersResponse()
    {
        return [
          "data" => [
            "updateUser" => [
                "id" => 1,
                "email" => "admin@test.com",
                "name" => "Changed Name",
            ]
          ]
        ];
    }
}
