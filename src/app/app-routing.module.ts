import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimelineComponent} from "./components/timeline/timeline.component";
import {TableComponent} from "./components/table/table.component";

const routes: Routes = [
  { path: '', redirectTo: 'timeline', pathMatch: 'full' },
  { path: 'timeline',component: TimelineComponent },
  { path: 'tabs',component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
