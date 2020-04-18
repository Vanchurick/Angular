import { Component, Input } from '@angular/core';


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
  name: string;
  timer: string = "10";
  countClick: number = 0;
  time: number;
  visibleForm: boolean = true;
  results: Result[] = [];
  visibleStartButton: boolean = true;
  clickButtonDisabled: boolean = false;
  backgroundColor: string = "background-color: #586;";



  closeModal() {
    this.visibleForm = false;
  }

  openModal() {
    this.visibleForm = true;
  }

  newUser() {
    this.openModal();
    this.reset()
    this.name = "";
  }

  addClick() {
    this.countClick += 1;
    this.backgroundColor = `background-color: #${Math.ceil(Math.random() * 1000)};`
  }


  startTimer() {
    this.visibleStartButton = false;
    let time = Number(this.timer);
    this.time = time;

    let timerID = setInterval(() => {
      time -= 1
      this.time = time;

      if (this.time === 0) {
        clearInterval(timerID)
        this.addResult();
        this.reset()
        this.clickButtonDisabled = true;

        setTimeout(() => {
          this.visibleStartButton = true;
          this.clickButtonDisabled = false;

        }, 5000);

      }


    }, 1000);



  }

  addResult() {
    const result = {
      time: Number(this.timer),
      name: this.name,
      clicks: this.countClick,
    }

    this.results.push(result);
  }

  reset() {
    this.countClick = 0;
    this.time = Number(this.timer);
  }
}
