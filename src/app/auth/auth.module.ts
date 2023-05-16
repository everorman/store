import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { CustomMaterialModule } from '../core/material.module';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SigninComponent, AuthComponent, ProfileComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AuthModule {}
