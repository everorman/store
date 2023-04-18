import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [ProductRoutingModule],
  declarations: [ProductListComponent],
})
export class ProductModule {}
