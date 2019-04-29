<?php

namespace App\Services;

use Illuminate\Support\Collection;
use App\Repositories as Repos;
use App\Models;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public $userRepo;

    /**
     * @param Repos\UserRepository $userRepo
     */
    public function __construct(
        Repos\UserRepository $userRepo
    ) {
        $this->userRepo = $userRepo;
    }

    /**
     * @param array $attributes
     * @return Models\User|null
     */
    public function create(array $attributes) : ?Models\User
    {
        $attributes['password'] = !empty($attributes['password'])
            ? Hash::make($attributes['password'])
            : null;

        $user = $this->userRepo->create($attributes);

        return $user;
    }

    /**
     * Update a user record.
     *
     * @param Models\User $user
     * @param array       $attributes
     * @return Models\User|null
     */
    public function update(Models\User $user, array $attributes): ?Models\User
    {
        if (!empty($attributes['password'])) {
            $attributes['password'] = Hash::make($attributes['password']);
        }

        $user = $this->userRepo->update($attributes, $user->id);

        return $user;
    }

    /**
     * Updates a user's roles.
     *
     * @param Models\User $user
     * @param array       $roles
     * @return Models\User
     */
    public function updateUserRoles(Models\User $user, array $roles) : Models\User
    {
        if (isset($roles)) {
            $user->syncRoles($roles);
        } else {
            $user->roles()->detach();
            $user->assignRole('User');
        }

        return $user;
    }

    /**
     * @param Models\User $user
     * @return void
     */
    public function deleteUser(Models\User $user) : void
    {
        $this->userRepo->delete($user->id);
        $this->searchService->removeUser($user);
        // TODO Verify if we need to invalidate the cache here.
        CacheService::flush($this->cacheTags);
    }

    /**
     * Return a collection of all users
     *
     * @param string $orderField The field used to sort
     * @param string $order      Use 'asc' or 'desc' for ascending or descending order
     * @return Collection
     */
    public function allUsers(
        $orderField = 'id',
        $order = 'asc'
    ) : Collection {
        return $this->userRepo->allUsers($orderField, $order);
    }

    /**
     * Fetch a User given its' ID
     *
     * @param string $id
     * @return Models\User|null
     */
    public function userById(string $id) : ?Models\User
    {
        return $this->userRepo->userById($id);
    }

    /**
     * Fetch a User entity given its' email
     *
     * @param string $email
     * @return Models\User|null
     */
    public function userByEmail(string $email) : ?Models\User
    {
        return $this->userRepo->userByEmail($email);
    }

    /**
     * Search the users using the search service.
     *
     * @param string  $term
     * @param integer $page
     * @param integer $pageSize
     * @return array
     */
    public function searchUsers(string $term, int $page = 1, int $pageSize = 15) : array
    {
        return $this->searchService->searchUsersByPhrase($term, ($page - 1) * $pageSize, $pageSize);
    }

    /**
     * Get users with a particular role.
     *
     * @param string $role
     * @return mixed
     */
    public function usersWithRole(string $role)
    {
        return $this->userRepo->usersWithRole($role);
    }

    /**
     * Gets all users from an array of emails
     *
     * @param array $emails
     * @param array $with
     * @return Repos\UserRepository[]|\Illuminate\Database\Eloquent\Collection
     */
    public function usersByEmail(array $emails, $with = [])
    {
        return $this->userRepo->usersByEmail($emails, $with);
    }
}
