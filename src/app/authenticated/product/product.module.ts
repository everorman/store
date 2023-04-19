import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingService } from '../../shared/loading/loading.service';
import { MessagesService } from '../../shared/messages/messages.service';
import { ProductService } from './services/product.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    ProductRoutingModule,
    CustomMaterialModule,
    HttpClientModule,
    SharedModule,
  ],
  declarations: [ProductListComponent],
  providers: [LoadingService, MessagesService, ProductService],
})
export class ProductModule {}
