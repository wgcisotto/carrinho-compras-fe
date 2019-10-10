import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ItemListComponent } from './components/item-list/item-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';

import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { CartClosedComponent } from './components/cart-closed/cart-closed.component';


@NgModule({
  declarations: [
    AppComponent, 
    ItemListComponent, 
    UserListComponent, 
    CartComponent, CartClosedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule, 
    HttpClientModule,
    MatSelectModule, 
    MatMenuModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
