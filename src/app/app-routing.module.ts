import { CartClosedComponent } from './components/cart-closed/cart-closed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  { path: 'item-list', component: ItemListComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart-closed/:id', component: CartClosedComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }