import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { OrderService } from 'src/app/shared/services/order.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  products: IProduct[] = [];
  localProducts: IProduct[] = [];

  constructor(
    private orderService: OrderService,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProduct().subscribe(products => {
      this.products = products;
    })
  }

  addToBasket(product: IProduct): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.localProducts = JSON.parse(localStorage.getItem('basket'));
      if (this.localProducts.some(localProduct => localProduct.id === product.id)){
        const index = this.localProducts.findIndex(localProduct => localProduct.id === product.id);

        this.localProducts[index].count += product.count;
      }
      else {
        this.localProducts.push(product);
      }
      localStorage.setItem('basket', JSON.stringify(this.localProducts));
    }
    else {
      this.localProducts.push(product);
      localStorage.setItem('basket', JSON.stringify(this.localProducts));
    }

    this.orderService.basket.next(product);
    
  }

  productCounter(product: IProduct, isIncrease: boolean) {
    if (isIncrease) {
      product.count++;
    }
    else {
      if (product.count > 1 ) {
        product.count--
      }
    }
  }

}
