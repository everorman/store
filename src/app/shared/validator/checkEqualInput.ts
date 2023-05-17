import { FormGroup } from '@angular/forms';

export function emailMatchValidator(group: FormGroup) {
  const email = group.get('email')?.value;
  const confirmEmail = group.get('confirmEmail')?.value;
  console.log(email, confirmEmail);
  if (email === confirmEmail) {
    return null; // los valores coinciden, no hay error
  } else {
    console.log('Error');
    return { emailMismatch: true }; // los valores no coinciden, devuelve un objeto con un error llamado "emailMismatch"
  }
}

export function passwordMatchValidator(group: FormGroup) {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;

  if (password === confirmPassword) {
    return null; // los valores coinciden, no hay error
  } else {
    return { passwordMismatch: true }; // los valores no coinciden, devuelve un objeto con un error llamado "passwordMismatch"
  }
}
