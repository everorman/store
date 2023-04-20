import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../../shared/loading/loading.service';
import { ProductService } from '../services/product.service';
import { MessagesService } from '../../../shared/messages/messages.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  productForm!: FormGroup;
  subscriber!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private loading: LoadingService,
    private message: MessagesService
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      stock: ['', Validators.required],
      purchasePrice: ['', Validators.required],
      soldPrice: ['', Validators.required],
      brand: [''],
      model: [''],
      productCode: [''],
    });
  }

  ngOnDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

  save() {
    console.log(this.productForm.value, this.productForm);

    if (this.productForm.valid) {
      this.loading.loadingOn();
      this.productService.addProduct(this.productForm.value).then((result) => {
        console.log('Result', result);
        this.loading.loadingOff();
        this.message.showMessage({
          text: 'Producto guardado con éxito',
          type: 'success',
        });
      });
    } else {
      this.productForm.markAllAsTouched();
      this.message.showMessage({
        text: 'El formulario presenta errores',
        type: 'error',
      });
    }
  }
}
