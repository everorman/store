import { AbstractControl, FormGroup } from '@angular/forms';

export function emailMatchValidator(control: AbstractControl): void | null {
  const emailControl = control.get('email');
  const confirmEmailControl = control.get('confirmEmail');

  if (emailControl?.pristine || confirmEmailControl?.pristine) {
    return null;
  }

  if (emailControl?.value === confirmEmailControl?.value) {
    return null;
  }

  confirmEmailControl?.setErrors({ emailMismatch: true });
}

export function passwordMatchValidator(control: AbstractControl): void | null {
  const passwordControl = control.get('password');
  const confirmPasswordControl = control.get('confirmPassword');

  if (passwordControl?.pristine || confirmPasswordControl?.pristine) {
    return null;
  }

  if (passwordControl?.value === confirmPasswordControl?.value) {
    return null;
  }

  confirmPasswordControl?.setErrors({ passwordMismatch: true });
}
