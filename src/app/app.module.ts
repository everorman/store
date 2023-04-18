import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { SigninComponent } from './components/signin/signin.component';
import { CustomMaterialModule } from './core/material.module';
import { LoadingComponent } from './components/loading/loading.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LoadingService } from './components/loading/loading.service';
import { MessagesService } from './components/messages/messages.service';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    NavTopComponent,
    LoadingComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FormsModule,
  ],
  providers: [LoadingService, MessagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
