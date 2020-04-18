import { Component, Input } from '@angular/core';
import { Result } from '../clicker/clicker.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() result: Result


}
