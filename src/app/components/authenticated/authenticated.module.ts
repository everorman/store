import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './../../core/material.module';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, AuthenticatedRoutingModule, CustomMaterialModule],
  declarations: [DashboardComponent],
})
export class AuthenticatedModule {}
