import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PocComponent } from './pages/poc/poc.component';
import { TaskComponent } from './pages/task/task.component';

const routes: Routes = [

  {path: 'main-page', component: MainComponent},
  {path: 'poc-page', component: PocComponent},
  {path: 'task-page', component: TaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
