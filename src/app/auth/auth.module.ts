import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { CustomMaterialModule } from '../core/material.module';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [SigninComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AuthModule {}
