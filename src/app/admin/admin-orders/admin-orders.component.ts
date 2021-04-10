import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {

  orders: Array<IOrder> = []

  constructor(
    private orderService: OrderService  
  ) { }

  ngOnInit(): void {
   this.getOrders()
  
   
  }

  getOrders():void {
    this.orderService.getOrder().subscribe(res =>{
      this.orders = res
      console.log(res);
      
      
    })
  }

  images(order)  {
     return order.map(el=> el.image)
     
  }

  delete(iteam:IOrder){
    this.orderService.deleteOrder(iteam).subscribe(res=> 
      this.getOrders())
  }

}
