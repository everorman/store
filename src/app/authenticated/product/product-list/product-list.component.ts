import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { Product } from '../services/product.model';
import { ProductService } from '../services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDataSource } from '../services/product.datasource';
import { LoadingService } from 'src/app/shared/loading/loading.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(
    private productService: ProductService,
    private loadingService: LoadingService
  ) {}

  displayedColumns: string[] = ['id', 'title', 'price', 'marca', 'model'];
  data: Product[] = [];
  dataSubscriber!: Subscription;
  dataSource!: ProductDataSource;

  ngOnInit(): void {
    this.dataSource = new ProductDataSource(
      this.productService,
      this.loadingService
    );
    this.dataSource.loadProduct();
  }

  ngOnDestroy(): void {
    this.dataSubscriber.unsubscribe();
  }
}
