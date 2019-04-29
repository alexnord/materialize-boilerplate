<?php

namespace App\GraphQL\Mutation;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Mutation;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class UpdateUserMutation extends Mutation
{
    /**
     * @param Repos\UserService $userService
     */
    public function __construct(
        UserService $userService
    ) {
        $this->userService = $userService;
    }

    protected $attributes = [
        'name' => 'UpdateUser'
    ];

    public function authorize(array $args)
    {
        try {
            $this->auth = JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            $this->auth = null;
        }

        return (boolean) $this->auth;
    }

    public function type()
    {
        return GraphQL::type('users');
    }

    public function args()
    {
        return [
            'id' => [
                'name' => 'id',
                'type' => Type::nonNull(Type::int())
            ],
            'name' => [
                'name' => 'name',
                'type' => Type::string()
            ],
            'email' => [
                'name' => 'email',
                'type' => Type::string()
            ],
            'password' => [
                'name' => 'password',
                'type' => Type::string()
            ]
        ];
    }

    public function rules(array $args = [])
    {
        return [
            'name'     => ['string', 'max:255', 'min:2'],
            'email'    => ['email', 'max:255', 'unique:users'],
            'password' => ['string', 'min:6'],
        ];
    }

    public function resolve($root, $args)
    {
        $model = User::findOrFail($args['id']);
        $user = $this->userService->update($model, $args);

        return $user;
    }
}
