import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const publicGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    // Ensure auth status is up to date based on token presence
    authService.checkAuthStatus();

    if (authService.authStatus() === 'authenticated') {
        // Prevent authenticated users from accessing auth-related public routes
        router.navigateByUrl('/');
        return false;
    }

    return true;
};
