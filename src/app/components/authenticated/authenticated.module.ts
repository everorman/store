import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { CustomMaterialModule } from './../../core/material.module';

@NgModule({
  imports: [CommonModule, AuthenticatedRoutingModule, CustomMaterialModule],
  declarations: [],
})
export class AuthenticatedModule {}
