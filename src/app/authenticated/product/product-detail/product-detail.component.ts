import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../services/product.model';
import { LoadingService } from 'src/app/shared/loading/loading.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  productForm!: FormGroup;
  subscriber!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private loading: LoadingService
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
      marca: [''],
      model: [''],
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (!id) {
        this.router.navigate(['/app/product/list']);
        return;
      }
      this.subscriber = this.productService
        .getDetail(parseInt(id))
        .pipe(
          tap((res) => {
            this.productForm.patchValue(res);
          })
        )
        .subscribe();
    });
  }

  ngOnDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  save() {
    this.loading.loadingOn();
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).then((result) => {
        console.log('Result', result);
        this.loading.loadingOff();
      });
    }
  }
}
