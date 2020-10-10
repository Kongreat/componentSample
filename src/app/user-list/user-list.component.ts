import { Component, OnInit } from '@angular/core';
import { Users } from '../shared/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent{
  constructor() { }
  users = Users;
  liked = 0;

  onLiked(agreed: boolean): void{
    if (agreed === true){
      this.liked++;
    }
  }

}
