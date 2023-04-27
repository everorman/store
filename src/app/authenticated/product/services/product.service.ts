import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product.model';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
  docData,
  getDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private firestore: Firestore) {}

  getProducts() {
    return this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .pipe(
        tap((res) => {
          console.log(res);
        })
      );
  }

  async getDetail(id: string): Promise<Product> {
    console.log(id);
    const productDoc = doc(this.firestore, `product/${id}`);
    const docSnap = await getDoc(productDoc);

    if (!docSnap.exists()) {
      throw new Error('Product not found');
    }
    console.log(docSnap.data());
    return docSnap.data() as Product;
  }

  deleteProduct(id: string) {
    const productDoc = doc(this.firestore, `product/${id}`);
    return deleteDoc(productDoc);
  }

  addProduct(product: Product) {
    const productRef = collection(this.firestore, 'product');
    return addDoc(productRef, product);
  }

  getAll(): Observable<Product[]> {
    const productRef = collection(this.firestore, 'product');
    return collectionData(productRef, { idField: 'id' }) as Observable<
      Product[]
    >;
  }
}
