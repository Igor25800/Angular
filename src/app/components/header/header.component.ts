import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  localProducts: IProduct[] = [];
  getProduct: Array<any> = [];
  totalPrice: number = 0;

  category 

  constructor(
    private orderService: OrderService,
    public categoryService: CategoriesService
    
  ) { }

  ngOnInit(): void {
    this.loadLocalStorage();
    this.initSubscription();
    this.getCategory()
    this.initSubg()
    
//     const s=new Subject();
//   const sb=s.subscribe(console.log);
//   s.next(1)
//   s.next(2)
//  sb.unsubscribe()
//  s.next(3)
    
  }

  initSubg(): void{
    this.categoryService.s.subscribe(res=> {
      this.category = res
    });
  }


  getCategory():void{
    this.categoryService.getCategory().subscribe( res=> {
      this.category  = res
    })
  }
  
  initSubscription(): void {
    this.orderService.basket.subscribe( data => {
      this.loadLocalStorage();
      
    })
  }

  private loadLocalStorage(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.localProducts = JSON.parse(localStorage.getItem('basket'));
    }
    this.total();
  }

  private total() {
    this.totalPrice = this.localProducts.reduce((total, elem) => {
      return total + (elem.price * elem.count);
    }, 0);
  }

 
}
