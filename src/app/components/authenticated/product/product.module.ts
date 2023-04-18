import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { CustomMaterialModule } from 'src/app/core/material.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingService } from '../../loading/loading.service';
import { MessagesService } from '../../messages/messages.service';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [ProductRoutingModule, CustomMaterialModule, HttpClientModule],
  declarations: [ProductListComponent],
  providers: [LoadingService, MessagesService, ProductService],
})
export class ProductModule {}
