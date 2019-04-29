<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use App\Models\User;
use Illuminate\Support\Collection;
use Closure;
use DateTime;

class UserRepository extends BaseRepository
{
    /**
     * Configure the Model
     *
     * @return User
     **/
    public function model()
    {
        return User::class;
    }
}
