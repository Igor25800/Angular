import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenzorComponent } from './cenzor/cenzor.component';
import { NavComponent } from '../commponents/nav/nav.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { WorksComponent } from './works.component';


const routes: Routes = [
  {
    path: '',
    component: WorksComponent,
  },
  {
    path : 'cenzor',
    component: CenzorComponent,
   
  },
  {
    path: 'tasklist',
    component: TasklistComponent
  },
  {
    path : 'userlist',
    component : UserlistComponent
  },
  {
    path : 'nav',
    component : NavComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorksRoutingModule { }
