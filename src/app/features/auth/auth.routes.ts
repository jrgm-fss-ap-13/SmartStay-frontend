import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import AuthLayout from '../../layout/pages/auth-layout/auth-layout';
import { ResetPassword } from './pages/reset-password/reset-password';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { VerificationLayout } from '../../layout/pages/verificationLayout/verificationLayout';
import { EmailVerified } from './pages/email-verified/email-verified';
import { ConfirmEmail } from './pages/confirm-email/confirm-email';
import { publicGuard } from './guards/public.guard';

export const AUTH_ROUTES: Routes = [

    {
        path: 'verification',
        component: VerificationLayout,
        children: [
            // FULL PAGE ROUTES
            {
                path: 'forgot-password',
                component: ForgotPassword
            },
            {
                path: 'reset-password',
                component: ResetPassword
            },
            {
                path: 'email-verified/:uid/:token',
                canActivate: [publicGuard],
                component: EmailVerified
            },
            {
                path: 'confirm-email',
                canActivate: [publicGuard],
                component: ConfirmEmail
            }

        ]
    },
    {
        path: '',
        component: AuthLayout,

        children: [

            {
                path: 'login',
                canActivate: [publicGuard],
                component: LoginPage
            },
            {
                path: 'register',
                canActivate: [publicGuard],
                component: RegisterPage
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    },

];

export default AUTH_ROUTES;