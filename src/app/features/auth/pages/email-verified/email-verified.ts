import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-email-verified',
  imports: [],
  templateUrl: './email-verified.html',
  styleUrl: './email-verified.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailVerified {

  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);


  uid = signal('');
  token = signal('');


  verifyPayload = computed(() => ({
    uid: this.uid(),
    token: this.token()
  }));

  ngOnInit() {

    this.uid.set(
      this.route.snapshot.paramMap.get('uid') ?? ''
    );

    this.token.set(
      this.route.snapshot.paramMap.get('token') ?? ''
    );

    this.onVerifyEmail();
  }

  onVerifyEmail() {
    this.authService.verifyEmail(this.verifyPayload()).subscribe({
      next: () => {
        console.log("Email verificado exitosamente");
      },
      error: (error) => {
        console.log("Error al verificar el email");
      }
    });
  }
}


