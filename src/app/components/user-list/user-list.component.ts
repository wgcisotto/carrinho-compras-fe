import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  userSelected: User = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers ();
  }

  getUsers(): void {
    // this.items = ITENS
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  add(name :string, email: string){
    name = name.trim();
    email = email.trim();
    let id: string;

    if (!name) { return; }
    if (!email) { return; }

    if(this.userSelected == null){
      this.userService.addUser({id,  name, email } as User)
        .subscribe(user => {
          this.users.push(user);
        });
    }else{
      this.userSelected.name = name;
      this.userSelected.email = email;
      this.userService.updateUser(this.userSelected)
        .subscribe();
      this.userSelected = null;
    }
  }

  delete(user: User): void {
    this.users = this.users.filter(i=> i !== user);
    this.userService.deleteUser(user).subscribe();
  }

  edit(user: User): void {
    this.userSelected = user;
  }
  cancel(): void{
    this.userSelected = null;
  }
}
