import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LoginForm } from '../../components/login-form/login-form';
import { RouterLink, Router } from '@angular/router';
import { SocialButtons } from "../../components/social-buttons/social-buttons";
import { LoginRequest } from '../../interfaces/login.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [LoginForm, RouterLink, SocialButtons],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  private authService = inject(AuthService);
  private router = inject(Router);

  backendErrors = signal<any | null>(null);

  onLogin(credentials: LoginRequest) {
    this.backendErrors.set(null);
    this.authService.login(credentials).subscribe({
      next: (response) => {
        // Navigate or handle successful login as needed
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login error', error);
        this.backendErrors.set(error.error);
      }
    });
  }
}
