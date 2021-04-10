import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';

import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component : AdminComponent,
    children: [
      {
        path: 'blog',
        component:  AdminBlogComponent
      },
      {
        path: 'category',
        component: AdminCategoryComponent
      },
      {
        path: 'products',
        component: AdminProductsComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo : 'category'
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
