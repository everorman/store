import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './core/material.module';
import { LoadingService } from './shared/loading/loading.service';
import { MessagesService } from './shared/messages/messages.service';
import { NavTopComponent } from './shared/nav-top/nav-top.component';
import { SigninComponent } from './shared/signin/signin.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent, SigninComponent, NavTopComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FormsModule,
    SharedModule,
  ],
  providers: [LoadingService, MessagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
