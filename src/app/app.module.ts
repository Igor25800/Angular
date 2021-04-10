import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './page/blog/blog.component';

import { HeaderComponent } from './сomponents/header/header.component';
import { FooterComponent } from './сomponents/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { PizzaComponent } from './page/pizza/pizza.component';
import { SearchPipe } from './shared/pipes/search/search.pipe';
import { ModalProductsDeleteComponent } from './сomponents/admin/admin-products-modal/modal-products-delete/modal-products-delete.component';

import { ModalAddComponent } from './сomponents/admin/admin-category-modal/modal-add/modal-add.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';











@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    PizzaComponent,
    
    
   
    
    
  ],
   
  
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    
    
  ],
  
  
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
