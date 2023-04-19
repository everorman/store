import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .pipe(
        tap((res) => {
          console.log(res);
        })
      );
  }

  getDetail(id: number) {
    return this.http
      .get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
      .pipe(
        tap((res) => {
          console.log(res);
        })
      );
  }
}
