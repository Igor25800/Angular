import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { SalesComponent } from './pages/sales/sales.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { SaladComponent } from './pages/salad/salad.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { BasketUpdatedComponent } from './pages/basket-updated/basket-updated.component';
import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminSalesComponent } from './admin/admin-sales/admin-sales.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { HryvniaPipe } from './shared/pipes/hryvnia.pipe';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { loader } from './shared/configuration/loader.config';
import { ProductComponent } from './pages/product/product.component';
import { ValuePipe } from './shared/pipes/value.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SalesComponent,
    PizzaComponent,
    SaladComponent,
    DrinksComponent,
    PaymentComponent,
    BasketUpdatedComponent,
    HomeComponent,
    AdminComponent,
    AdminCategoryComponent,
    AdminProductsComponent,
    AdminSalesComponent,
    AdminOrdersComponent,
    HryvniaPipe,
    SearchPipe,
    ProductDetailsComponent,
    ProductComponent,
    ValuePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    NgxUiLoaderModule.forRoot(loader),
    NgxUiLoaderRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
