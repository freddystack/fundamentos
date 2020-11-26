import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from '../app/components/jobs/jobs.component';
import { PeopleComponent } from '../app/components/people/people.component';
import { AboutComponent } from '../app/components/about/about.component';
import { CanvasComponent } from '../app/components/canvas/canvas.component';


const routes: Routes = [
  {path: "card", component: JobsComponent},
  {path: "list", component: PeopleComponent},
  {path: "canvas", component: CanvasComponent},
  {path: "**",pathMatch : "full", component: JobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
