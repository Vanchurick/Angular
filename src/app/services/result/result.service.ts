import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ResultService {

  results = JSON.parse(localStorage.getItem("results")) || [];

  getResults() {
    return this.results;
  }

  addNewResult(result) {
    this.results.push(result);
    localStorage.setItem("results", JSON.stringify(this.results));
  }

}
