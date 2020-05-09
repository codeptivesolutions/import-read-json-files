import { Component, OnInit } from '@angular/core';
import data from '../../assets/json/data.json';

@Component({
  selector: 'app-first-way',
  template: `
    <div class="first-way">
      <app-result [from]="'First Way'" [jsonData]="jsonDataResult"></app-result>
    </div>
  `,
})
export class FirstWayComponent implements OnInit {
  jsonDataResult: any;

  constructor() {}

  ngOnInit(): void {
    this.jsonDataResult = data;
    console.log('--- First Way of jsonDataResult :: ', this.jsonDataResult);
  }
}
