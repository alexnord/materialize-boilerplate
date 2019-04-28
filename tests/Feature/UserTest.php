<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    // use RefreshDatabase;

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
        $response = $this->post('/graphql', [
            'query' => "mutation qUpdateUser{
              updateUser(id: 1, name: \"Poopie Pants McGee\") {
                id
                email
                name
              }
            }"
        ]);

        $jsonResponse = $response->json();

        $response
            ->assertStatus(200)
            ->assertSee('Poopie Pants McGee');
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
