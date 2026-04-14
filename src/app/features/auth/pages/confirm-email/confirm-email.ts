import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../../store/auth.store';

@Component({
  selector: 'app-confirm-email',
  imports: [],
  templateUrl: './confirm-email.html',
  styleUrl: './confirm-email.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmEmail { 

  private authStore = inject(AuthStore);
  correo = this.authStore.emailToConfirm;

  

}
