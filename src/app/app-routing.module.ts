import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstWayComponent } from './first-way/first-way.component';
import { SecondWayComponent } from './second-way/second-way.component';
import { ThirdWayComponent } from './third-way/third-way.component';

const routes: Routes = [
  { path: 'first-way', component: FirstWayComponent },
  { path: 'second-way', component: SecondWayComponent },
  { path: 'third-way', component: ThirdWayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
