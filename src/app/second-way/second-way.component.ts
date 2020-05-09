import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-second-way',
  template: `
    <div class="second-way">
      <app-result
        [from]="'Second Way'"
        [jsonData]="jsonDataResult"
      ></app-result>
    </div>
  `,
})
export class SecondWayComponent implements OnInit {
  jsonDataResult: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('assets/json/data.json').subscribe((data) => {
      this.jsonDataResult = data;
      console.log('--- Second Way of jsonDataResult :: ', this.jsonDataResult);
    });
  }
}
