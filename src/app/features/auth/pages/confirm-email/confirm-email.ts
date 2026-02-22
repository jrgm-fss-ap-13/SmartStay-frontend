import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-confirm-email',
  imports: [],
  templateUrl: './confirm-email.html',
  styleUrl: './confirm-email.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmEmail { 

  correo = signal('jrgm.fss@gmail.com');

}
