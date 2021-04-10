import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { Order } from 'src/app/shared/models/order.model';


@Component({
  selector: 'app-basket-updated',
  templateUrl: './basket-updated.component.html',
  styleUrls: ['./basket-updated.component.scss']
})
export class BasketUpdatedComponent implements OnInit {
  orders: Array<IProduct> = [];

  userName: string;
  userPhone: string;
  userCity: string;
  userStreet: string;
  userHouse: number;
  totalPayment: string;
  userComment: string;
  totalPrice: number;

  delivery :string = 'Доставка'
  money:string   = ' Готівка'

  date:string
  time:string
  
  isbolean
  masOrder: Array<IOrder> = []


  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getBasket();
    this.getMas()
    this.func()
  }

  getMas():void{
    this.orderService.getOrder().subscribe(res=> {
      this.masOrder = res
      
    })
    
    
  }

  func():boolean{
    if(this.money = '') {
      return true
    }
    return false
  }

  private getBasket(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.orders = JSON.parse(localStorage.getItem('basket'));
    }
    this.total();
  }

  productCount(product: IProduct, status: boolean) {
    if (status) {
      product.count++;
    } else {
      if (product.count > 1) {
        product.count--;
      }
    }
    this.total();
    this.updateLocalProducts();
    this.orderService.basket.next(this.orders);
  }

  deleteProduct(product: IProduct) {
    const index = this.orders.findIndex(prod => prod.id === product.id);
    this.orders.splice(index, 1);
    this.total();
    this.updateLocalProducts();
    this.orderService.basket.next(this.orders);
  }

  addOrder(): void {
    const newOrder: IOrder = new Order(1,
                                       this.userName,
                                       this.userPhone,
                                       this.userCity,
                                       this.userStreet,
                                       this.userHouse,
                                       this.orders,
                                       this.totalPrice,
                                       this.userComment ,
                                       this.money,
                                       this.delivery,
                                       this.date,
                                       this.time);

      
   
    
      
                                       
     if (this.masOrder.length > 0) {
        newOrder.id = this.masOrder.slice(-1)[0].id + 1;
        
      }
    
    // console.log(this.orders);
    

    this.orders = [];
    localStorage.setItem('basket', JSON.stringify(this.orders));
    this.orderService.basket.next(this.orders);
    this.orderService.addOrder(newOrder).subscribe(() => {
      this.getBasket();
    });
  }

  private total() {
    this.totalPrice = this.orders.reduce((total, elem) => {
      return total + (elem.price * elem.count);
    }, 0);
  }

  private updateLocalProducts(): void {
    localStorage.setItem('basket', JSON.stringify(this.orders));
  }
}

