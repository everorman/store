import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { ProductDataSource } from '../services/product.datasource';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  displayedColumns: string[] = [
    'id',
    'productCode',
    'title',
    'purchasePrice',
    'salePrice',
    'brand',
    'model',
  ];
  dataSource!: ProductDataSource;

  ngOnInit(): void {
    this.dataSource = new ProductDataSource(
      this.productService,
      this.loadingService
    );
    this.dataSource.loadProduct();
  }

  showDetail(id: string) {
    this.router.navigate(['/app/product/detail', id]);
    console.log(id);
  }
}
