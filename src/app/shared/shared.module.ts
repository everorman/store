import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MessagesComponent } from './messages/messages.component';
import { CustomMaterialModule } from '../core/material.module';

@NgModule({
  declarations: [LoadingComponent, MessagesComponent],
  imports: [CommonModule, CustomMaterialModule],
  exports: [LoadingComponent, MessagesComponent],
})
export class SharedModule {}
