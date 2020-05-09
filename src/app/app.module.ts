import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstWayComponent } from './first-way/first-way.component';
import { SecondWayComponent } from './second-way/second-way.component';
import { ThirdWayComponent } from './third-way/third-way.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstWayComponent,
    SecondWayComponent,
    ThirdWayComponent,
    ResultComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
