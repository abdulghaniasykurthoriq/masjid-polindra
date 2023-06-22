<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class isDosenOrAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next, ...$roles)
    {
        $user = $request->user();

        // Memeriksa apakah pengguna memiliki level yang sesuai
        if ($user && (in_array($user->level, $roles))) {
            return $next($request);
        }

        // Jika pengguna tidak memiliki level yang sesuai, Anda dapat mengambil tindakan yang sesuai
        abort(403, 'Unauthorized');
    }
}
