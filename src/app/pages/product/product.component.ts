import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CATEGORY } from 'src/app/shared/constants/category-name.constant';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { Category } from 'src/app/shared/models/category.model';
import { Product } from 'src/app/shared/models/product.model';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: IProduct[] = [];
  localProducts: IProduct[] = [];
  categoryName: string;
  category = CATEGORY;
  prise: number
  
  

  nameCat

  priceScet

  constructor(
    private orderService: OrderService,
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoriesService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadProducts();
      }
      // console.log(event);
      
    })
  }




  ngOnInit(): void {
    this.loadProducts();
    this.initSubg()
   
    
    
    
  }

  count(p?:IProduct): number{
    
    return  p.price * p.count
    // this.prise = price
    // return this.prise

  }

 initSubg(): void{
    this.categoryService.getCategory().subscribe(res=>{
      this.nameCat = res
      
    })
      
 
  }


  loadProducts(): void {
    this.categoryName = this.route.snapshot.paramMap.get('category')

    
    

    this.productService.getProduct().subscribe(products => {
      this.products = products.filter(product => product.category.nameEN === this.categoryName);
      // console.log(products);
      
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
    product.count = 1
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
