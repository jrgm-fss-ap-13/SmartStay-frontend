import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RegisterForm } from '../../components/register-form/register-form';
import { Router, RouterLink } from '@angular/router';
import { SocialButtons } from "../../components/social-buttons/social-buttons";
import { RegisterRequest } from '../../interfaces/auth-response.interface';
import { AuthService } from '../../services/auth.service';
import { AuthStore } from '../../store/auth.store';


@Component({
  selector: 'app-register-page',
  imports: [RegisterForm, RouterLink, SocialButtons],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPage {

  private authService = inject(AuthService);
  private router = inject(Router);
  private authStore = inject(AuthStore);
  backendErrors = signal<any | null>(null);


  onRegister(data: RegisterRequest) {
    this.backendErrors.set(null);
    this.authService.register(data).subscribe({
      next: () => {
        console.log(data)
        this.backendErrors.set(null);
        this.authStore.emailToConfirm.set(data.email);
        this.router.navigate(['auth/verification/confirm-email']);
      },
      error: (error) => {
        this.backendErrors.set(error.error);
        console.log(error)
      }
    });
  }
}
