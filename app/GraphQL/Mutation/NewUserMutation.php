<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Support\Facades\Hash;

class NewUserMutation extends Mutation
{
    public $userService;

    /**
     * @param Repos\UserService $userService
     */
    public function __construct(
        UserService $userService
    ) {
        $this->userService = $userService;
    }

    protected $attributes = [
        'name' => 'NewUser'
    ];

    public function type()
    {
        return GraphQL::type('users');
    }

    public function args()
    {
        return [
            'name' => [
                'name' => 'name',
                'type' => Type::nonNull(Type::string())
            ],
            'email' => [
                'name' => 'email',
                'type' => Type::nonNull(Type::string())
            ],
            'password' => [
                'name' => 'password',
                'type' => Type::nonNull(Type::string())
            ],
        ];
    }

    public function rules(array $args = [])
    {
        return [
            'name'     => ['required', 'string', 'max:255'],
            'email'    => ['required', 'email', 'max:255', 'unique:users'],
            'password' => ['required' ,'string', 'min:6'],
        ];
    }

    public function resolve($root, $args)
    {
        $user = $this->userService->create($args);

        return $user;
    }
}
