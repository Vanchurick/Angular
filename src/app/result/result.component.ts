import { Component } from '@angular/core';
import { Result } from '../clicker/clicker.component';
import { ResultService } from '../services/result/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  constructor(private resultsService: ResultService) { }

  results = this.resultsService.getResults()

}
