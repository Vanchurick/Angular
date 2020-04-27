import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { ResultService } from '../services/result/result.service';

export interface Result {
  time: number,
  name: string,
  clicks: number,
}

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss'],
})


export class ClickerComponent {

  constructor(private userService: UserService, private resultService: ResultService, private router: Router) { }

  name: string = this.userService.getUserName();
  countClick: number = 0;
  gameTime: number = 10;
  isVisibleStartButton: boolean = true;
  backgroundColor: string = "background-color: #586;";

  addClick() {
    this.countClick += 1;
    this.backgroundColor = `background-color: #${Math.ceil(Math.random() * 1000)};`
  }


  startTimer() {

    this.isVisibleStartButton = false;

    let timerID = setInterval(() => {
      this.gameTime--

      if (this.gameTime === 0) {
        clearInterval(timerID)
        this.gameTime = 10;
        this.addResult();
        this.router.navigate(['result']);
      }
    }, 1000);

  }

  addResult() {
    const result = {
      time: this.gameTime,
      name: this.name,
      clicks: this.countClick,
    }

    this.resultService.addNewResult(result);
  }

}
