import { CartService } from './../../services/cart.service';
import { Cart } from './../../models/cart';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-closed',
  templateUrl: './cart-closed.component.html',
  styleUrls: ['./cart-closed.component.css']
})
export class CartClosedComponent implements OnInit {

  cart: Cart;
  total: number;
  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService)  { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.getCartByUserId(id);

  }

  getCartByUserId(userId:string){
    this.cartService.getCartByUserId(userId)
      .subscribe(cart => this.cart = cart
        );
      console.log(this.cart)
      console.log('oi')
      for (let entry of this.cart.items) {
        console.log(entry);
        this.total = entry.item.price * entry.qtd
     }

     alert(this.total);
    
  }

}
