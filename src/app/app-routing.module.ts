import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './page/blog/blog.component';
import { PizzaComponent } from './page/pizza/pizza.component';

const routes: Routes = [
  {
    path : 'pizza',
    component: PizzaComponent
  },
  {
    path : 'blog',
    component: BlogComponent
  },
  {
    path : 'admin',
    loadChildren:() => import('./admin/admin.module').then(m=> m.AdminModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo : 'pizza'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
