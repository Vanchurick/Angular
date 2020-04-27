import { Injectable } from '@angular/core';
import ResultInterface from '../../interfaces/result'

@Injectable({
  providedIn: 'root'
})

export class ResultService {

  results: ResultInterface[] = JSON.parse(localStorage.getItem("results")) || [];

  getResults() {
    return this.results;
  }

  addNewResult(result: ResultInterface) {
    this.results.push(result);

    this.results.sort((a, b) => {
      return b.clicks - a.clicks;
    });

    localStorage.setItem("results", JSON.stringify(this.results));
  }

}
