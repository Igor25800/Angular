import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SalesComponent } from './pages/sales/sales.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { SaladComponent } from './pages/salad/salad.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { BasketUpdatedComponent } from './pages/basket-updated/basket-updated.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';


import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminSalesComponent } from './admin/admin-sales/admin-sales.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { ProductComponent } from './pages/product/product.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'products/:category', component: ProductComponent },
  { path: 'products/:category/:id', component: ProductDetailsComponent },
  // { path: 'pizza', component: PizzaComponent },
  // { path: 'salad', component: SaladComponent },
  // { path: 'drinks', component: DrinksComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'basket', component: BasketUpdatedComponent },
  { path: 'admin', component: AdminComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'category' },
    { path: 'category', component: AdminCategoryComponent },
    { path: 'products', component: AdminProductsComponent },
    { path: 'sales', component: AdminSalesComponent },
    { path: 'orders', component: AdminOrdersComponent }
  ] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
