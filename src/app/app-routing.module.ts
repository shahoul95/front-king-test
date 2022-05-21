import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimelineComponent} from "./timeline/timeline.component";

const routes: Routes = [
  { path: '', redirectTo: 'timeline', pathMatch: 'full' },
  { path: 'timeline',component: TimelineComponent },
  { path: 'tabs',component: TimelineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
