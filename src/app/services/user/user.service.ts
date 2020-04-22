import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userName: string = localStorage.getItem('userName') || "Fastest Clicker in The World";

  getUserName() {
    return this.userName;
  }

  changeUserName(newName) {
    this.userName = newName;
    localStorage.setItem('userName', this.userName);
  }

  clearUserName() {
    this.userName = "";
    localStorage.setItem('userName', '');

  }
}
