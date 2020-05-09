import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  @Input() jsonData: any;
  @Input() from: 'First Way' | 'Second Way' | 'Third Way';

  constructor() {}

  getBgColor() {
    if (this.from === 'First Way') {
      return 'aliceblue';
    } else if (this.from === 'Second Way') {
      return 'lemonchiffon';
    } else {
      return 'whitesmoke';
    }
  }
}
