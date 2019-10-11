import { CartService } from './../../services/cart.service';
import { UserService } from './../../services/user.service';
import { Item } from './../../models/item';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Item[];
  users: User[];
  userSelected: User = null;

  constructor(private itemService: ItemService,
              private userService: UserService,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit() {
    this.getItems();
    this.getUsers();
  }


  getItems(): void {
    this.itemService.getItems()
    .subscribe(items => this.items = items);
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  add(item: Item): void{
    if(this.userSelected == null){
      alert("User is mandatory")
      return;
    }
    this.cartService.addItem(this.userSelected.id, item)
      .subscribe();
      alert("Adicionado");

  }

  remove(item: Item): void{
    if(this.userSelected == null){
      alert("User is mandatory")
      return;
    }
    this.cartService.removeItem(this.userSelected.id, item)
      .subscribe();
      alert("Removido");
  }

  close(userId: string): void{
    if(this.userSelected == null){
      alert("User is mandatory")
      return;
    }else{
      this.router.navigate(['/cart-closed/'+this.userSelected.id])
    }

  }

}
