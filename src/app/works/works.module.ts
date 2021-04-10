import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './works.component';
import { CenzorComponent } from './cenzor/cenzor.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from 'src/app/commponents/nav/nav.component';


@NgModule({
  declarations: [WorksComponent, CenzorComponent, TasklistComponent, UserlistComponent, NavComponent],
  imports: [
    CommonModule,
    WorksRoutingModule,
    FormsModule
  ]
})
export class WorksModule { }
