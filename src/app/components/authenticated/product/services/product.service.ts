import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('https://api.escuelajs.co/api/v1/products').pipe(
      tap((res) => {
        console.log(res);
      })
    );
  }
}
