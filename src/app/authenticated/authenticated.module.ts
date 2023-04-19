import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from '../core/material.module';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadingService } from '../shared/loading/loading.service';
import { MessagesService } from '../shared/messages/messages.service';
import { ProductService } from './product/services/product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    CustomMaterialModule,
    SharedModule,
  ],
  declarations: [DashboardComponent],
  providers: [LoadingService, MessagesService, ProductService],
})
export class AuthenticatedModule {}
