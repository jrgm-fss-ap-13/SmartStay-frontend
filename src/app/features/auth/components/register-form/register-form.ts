import { ChangeDetectionStrategy, Component, effect, inject, input, output, signal, computed } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterRequest } from '../../interfaces/auth-response.interface';
import { FormUtils } from '../../../../utils/form-utils';


@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterForm {

  private fb = inject(NonNullableFormBuilder);

  hidePassword = signal(true);

  hideConfirmPassword = signal(true);

  backendErrors = input<Record<string, string[]> | null>(null);

  submitRegister = output<RegisterRequest>();

  form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(FormUtils.emailPattern)]],
    nombreCompleto: ['', Validators.required], password: ['', [Validators.required, Validators.minLength(8)]],
    password2: ['', Validators.required],
    terms: [false, Validators.requiredTrue]
  },
    {
      validators: [
        FormUtils.isFieldOneEqualFieldTwo('password', 'password2')]
    });

  globalError = computed(() => {
    const errors = this.backendErrors();
    if (!errors) return null;
    if (errors['detail'])
      return errors['detail'][0];
    if (errors['non_field_errors'])
      return errors['non_field_errors'][0];
    return null;
  });

  applyBackendErrorsEffect = effect(() => {

    const errors = this.backendErrors();
    if (!errors) return;
    Object.entries(errors)
      .forEach(([field, messages]) => {
        const control =
          this.form.get(field);
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

  isValidField(field: string) {
    return FormUtils.isValidField(this.form, field);
  }

  getFieldError(field: string) {
    return FormUtils.getFieldError(this.form, field);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { terms, nombreCompleto, ...registerData } = this.form.getRawValue();
    const [firstName, lastName] = nombreCompleto.split(' ');
    const registerRequest: RegisterRequest = {
      email: registerData.email,
      firstName: firstName,
      lastName: lastName,
      password: registerData.password,
      password2: registerData.password2
    };
    this.submitRegister.emit(registerRequest);
  }

}