import { ChangeDetectionStrategy, Component, effect, inject, input, output, signal, computed } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../interfaces/login.interface';
import { FormUtils } from '../../../../utils/form-utils';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginForm {

  private fb = inject(NonNullableFormBuilder);

  hidePassword = signal(true);

  backendErrors = input<Record<string, string[]> | null>(null);

  login = output<LoginRequest>();

  form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(FormUtils.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  globalError = computed(() => {
    const errors = this.backendErrors();
    if (!errors) return null;
    if (errors['detail'])
      return errors['detail'][0];
    if (errors['non_field_errors'])
      return errors['non_field_errors'][0];

    const unmappedErrors = Object.keys(errors).filter(key => !this.form.get(key));
    if (unmappedErrors.length > 0) {
      return errors[unmappedErrors[0]][0];
    }

    return null;
  });

  applyBackendErrorsEffect = effect(() => {
    const errors = this.backendErrors();
    if (!errors) return;
    Object.entries(errors)
      .forEach(([field, messages]) => {
        const control = this.form.get(field);
        if (!control) return;
        control.setErrors({
          backend: messages[0]
        });
        control.markAsTouched();
      });
  });

  clearBackendErrorsEffect = effect(() => {
    this.form.valueChanges.subscribe(() => {
      Object.values(this.form.controls)
        .forEach(control => {
          if (control.hasError('backend')) {
            control.updateValueAndValidity({
              onlySelf: true,
              emitEvent: false
            });
          }
        });
    });
  });

  isValidField(field: string): boolean | null {
    return FormUtils.isValidField(this.form, field);
  }

  getFieldError(field: string): string | null {
    return FormUtils.getFieldError(this.form, field);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const {...loginRequest } = this.form.getRawValue();
    this.login.emit(loginRequest);
  }
}
