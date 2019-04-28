<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

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

        $response->assertStatus(200);
        $response->assertJson($this->getUsersResponse());
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
}
