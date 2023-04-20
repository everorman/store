import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { BehaviorSubject, Observable, catchError, finalize, of } from 'rxjs';

export class ProductDataSource implements DataSource<Product> {
  private productSubject = new BehaviorSubject<Product[]>([]);

  constructor(
    private productService: ProductService,
    private loadingService: LoadingService
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<Product[]> {
    return this.productSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.productSubject.complete();
    this.loadingService.loadingOff();
  }

  loadProduct() {
    this.productService
      .getAll()
      .subscribe((products) => this.productSubject.next(products));
  }
}
