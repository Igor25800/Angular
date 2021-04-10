import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { OrderModule } from 'ngx-order-pipe';
import { NgpSortModule } from "ngp-sort-pipe";
import { FilterPipe } from './shared/pipes/filter/filter.pipe';


import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';

import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './commponents/header/header.component';
import { IsUserPipe } from './shared/pipes/isUser/is-user.pipe';
import { ModalWindowsComponent } from './commponents/modal-windows/modal-windows.component';

import { ModalSingUpComponent } from './commponents/Angular-blog/modal-sing-up/modal-sing-up.component';
import { ModalAddPostComponent } from './commponents/Angular-blog/modal-add-post/modal-add-post.component';
import { ModalSingInComponent } from './commponents/Angular-blog/modal-sing-in/modal-sing-in.component';
import { HomeModule } from './page/home/home.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Lesson4Component,
    Lesson5Component,
    FilterPipe,
    IsUserPipe,
    ModalWindowsComponent,
    ModalSingUpComponent,
    ModalAddPostComponent,
    ModalSingInComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrderModule,
    NgpSortModule,
    ModalModule.forRoot(),
    HomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
