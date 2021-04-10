import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';

import { ModalAddComponent } from '../сomponents/admin/admin-category-modal/modal-add/modal-add.component';
import { ModalDeleteComponent } from '../сomponents/admin/admin-category-modal/modal-delete/modal-delete.component';

import { SearchPipe } from '../shared/pipes/search/search.pipe';

import { ModalProductsAddComponent } from '../сomponents/admin/admin-products-modal/modal-products-add/modal-products-add.component';

import { ModalProductsDeleteComponent } from '../сomponents/admin/admin-products-modal/modal-products-delete/modal-products-delete.component';

import { TableBlogComponent } from './admin-blog/table-blog/table-blog.component';
import { TableCategoryComponent } from './admin-category/table-category/table-category.component';









@NgModule({
  declarations: [
    AdminComponent, 
    AdminCategoryComponent, 
    AdminProductsComponent, 
    AdminBlogComponent, 
    ModalAddComponent,
    ModalDeleteComponent,
    SearchPipe,
    ModalProductsAddComponent,
    ModalProductsDeleteComponent,
    TableBlogComponent,
    TableCategoryComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    
   
  ],

  bootstrap: [AdminComponent],
  entryComponents: [ ModalProductsAddComponent ]
  
})
export class AdminModule { }
