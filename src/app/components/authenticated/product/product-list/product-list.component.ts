import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  data$!: Observable<any>;

  ngOnInit(): void {
    this.data$ = this.productService.getProducts();
  }
}
