import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Users } from '../shared/users';
import {UserDetailComponent} from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements AfterViewInit{
  constructor() { }
  users = Users;
  likes = 0;


  // task 2
  @ViewChild(UserDetailComponent)
  private UserComponent: UserDetailComponent;
  ngAfterViewInit(): void{
  }

  addId() {this.UserComponent.addId(); }

  // task 1
  onLiked(agreed: boolean): void{
    if (agreed === true){
      this.likes++;
    }
  }

}
