import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { BehaviorSubject, Observable, catchError, finalize, of } from 'rxjs';

export class ProductDataSource implements DataSource<Product> {
  private lessonsSubject = new BehaviorSubject<Product[]>([]);

  constructor(
    private productService: ProductService,
    private loadingService: LoadingService
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<Product[]> {
    return this.lessonsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.lessonsSubject.complete();
    this.loadingService.loadingOff();
  }

  loadProduct() {
    this.loadingService.loadingOn();

    this.productService
      .getProducts()
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingService.loadingOff())
      )
      .subscribe((products) => this.lessonsSubject.next(products));
  }
}
