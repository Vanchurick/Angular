import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userName: string = localStorage.getItem('userName') || "Fastest Clicker in The World";

  getUserName(): string {
    return this.userName;
  }

  changeUserName(newName: string) {
    this.userName = newName;
    localStorage.setItem('userName', this.userName);
  }

  clearUserName() {
    this.userName = "";
    localStorage.setItem('userName', '');

  }
}
