import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) { }

  userName: string = this.userService.getUserName();


  checkUserName(name) {
    const regExpName = /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi;
    const isNameCorrect = regExpName.test(name);

    if (!isNameCorrect) {
      alert('Incorect user name! Try again!');
      return false;
    }

    return true;
  }



  saveUserName() {
    if (!this.checkUserName(this.userName)) {
      return;
    };

    this.userService.changeUserName(this.userName)
    this.router.navigate(['play'])
  }


  d
}
