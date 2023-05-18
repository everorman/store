import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { passwordMatchValidator } from '../../shared/validator/checkEqualInput';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  showSpinner = false;

  private readonly fb = inject(FormBuilder);

  ngOnInit() {
    this.initForm();
  }

  save() {
    if (this.signupForm.valid) {
      this.showSpinner = true;
      setTimeout(() => (this.showSpinner = false), 3000);
    } else {
      console.log('Errors ', this.signupForm.errors);
    }
  }

  private initForm() {
    this.signupForm = this.fb.group(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        confirmEmail: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
      },
      {
        validator: passwordMatchValidator,
      }
    );
  }

  get email() {
    return this.signupForm.get('email');
  }
}
