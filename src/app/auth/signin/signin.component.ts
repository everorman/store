import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  showSpinner = false;

  constructor() {}

  ngOnInit() {}

  login() {
    console.log(this.loginForm.value);
    this.showSpinner = true;
    setTimeout(() => (this.showSpinner = false), 3000);
  }
}
