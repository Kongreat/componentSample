import {Component, Input, EventEmitter, Output, OnInit} from '@angular/core'; // added eventEmitter and output
import { User } from '../shared/user';
import { Users } from '../shared/users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  // styleUrls: ['./user-detail.component.css']
  styles: ['h4 { font-weight: bold }']
})
export class UserDetailComponent implements OnInit {
  @Input()
  get id(): number {
    return this._id;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set id(value: number) {
    this._id = value;
  }

  constructor() {  }

  @Output() rated = new EventEmitter<boolean>();
  didRate = false;
  // tslint:disable-next-line:variable-name
  private _id = 0;

  @Input() user: User;



  ngOnInit(): void {
  }

  increaseRating(flag: boolean): void {
    this.user.rating++;
    this.rated.emit(flag);
    this.didRate = true;
  }



}
