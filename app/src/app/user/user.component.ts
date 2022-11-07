import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userList: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((resp) => (this.userList = resp));
  }

  removeUser(user: User) {
    this.userService.removeUser(user.id).subscribe((resp) => {
      this.userList = this.userList.filter((ele) => ele.id != user.id);
    });
  }
}
