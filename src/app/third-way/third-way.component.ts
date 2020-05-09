import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/json/data.json';

@Component({
  selector: 'app-third-way',
  template: `
    <div class="third-way">
      <app-result [from]="'Third Way'" [jsonData]="jsonDataResult"></app-result>
    </div>
  `,
})
export class ThirdWayComponent implements OnInit {
  jsonDataResult: any;

  constructor() {}

  ngOnInit(): void {
    this.jsonDataResult = data['default'];
    console.log('--- Third Way of jsonDataResult :: ', this.jsonDataResult);
  }
}
