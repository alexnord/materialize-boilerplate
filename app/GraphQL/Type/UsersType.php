<?php

namespace App\GraphQL\Type;

use App\Models\User;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Type as GraphQLType;
use JWTAuth;

class UsersType extends GraphQLType
{
    protected $attributes = [
        'name'        => 'Users',
        'description' => 'A type',
        'model'       => User::class, // define model for users type
    ];

    // define field of type
    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'The id of the user'
            ],
            'email' => [
                'type' => Type::string(),
                'description' => 'The email of user'
            ],
            'name' => [
                'type' => Type::string(),
                'description' => 'The name of the user'
            ],
            'token' => [
                'type' => Type::string(),
                'description' => 'JWT token of the user',
                'selectable' => false, // Does not try to query this from the database
            ]
        ];
    }

    protected function resolveEmailField($root, $args)
    {
        return strtolower($root->email);
    }

    protected function resolveTokenField($root, $args)
    {
        return JWTAuth::fromUser(User::findOrFail($root->id));
    }
}
