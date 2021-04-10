import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
// import { AngularFireStorage } from '@angular/fire/storage/storage';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  adminCategory: Array<ICategory> = [];
  adminProducts: Array<IProduct> = [];
  uploadProgress: Observable<number>;

  productCategory: ICategory;
  nameEN: string;
  nameUA: string;
  description: string;
  weight: string;
  price: number;
  productImage: string;
  productId: number
  proteins : string;
  carbohydrates: string;
  fats: string;
  calorie : string;
  idCategory : number

  

  isAddBtn: boolean = true
  isBlockBtn: boolean = true

  

  constructor(private catService: CategoriesService,
              private prodService: ProductsService,
              private storage: AngularFireStorage
              ) { }

  ngOnInit(): void {
    this.getCategory();
    this.getProduct();
    // console.log(this.adminCategory);
    
    
   
  }


  addProduct(): void {
    const product = new Product(1,
    this.productCategory, 
    this.nameUA,
    this.nameEN,
    this.description,
    this.price,
    this.weight,
    1,
    this.proteins,
    this.carbohydrates,
    this.fats,
    this.calorie,
    this.productImage
    );
    if(this.adminProducts.length > 0) {
      
      product.id = this.adminProducts.slice(-1)[0].id + 1;
    }
    if(this.isBlockBtn){
      this.prodService.addProduct(product).subscribe( result => {
        this.getProduct()
      })
    }
    if(!this.isBlockBtn) {
      product.id = this.productId
      this.prodService.updateProduct(product).subscribe(res => {
        this.getProduct()
      })
      this.isBlockBtn = false
    }
    
   

  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `images/${this.uuid()}.${file.type.split('/')[1]}`;
    const task = this.storage.upload(filePath, file);
    this.uploadProgress = task.percentageChanges();
    task.then( result => {
      this.storage.ref(`images/${result.metadata.name}`).getDownloadURL().subscribe( img => {
        this.productImage = img;
      } )
    })
  }

  private getCategory(): void {
    this.catService.getCategory().subscribe(
      data => {
        this.adminCategory = data;
      }
    );
  }

  private getProduct(): void {
    this.prodService.getProduct().subscribe(
      data => {
        this.adminProducts = data;
      }
    );
  }

  setCategory(id: number  ): void {
      this.idCategory = id
      
    if(id > 0) {
      this.isAddBtn = false
      this.productCategory = this.adminCategory.filter(cat => cat.id === +id)[0];
    }
    else {
      this.isAddBtn = true
    }
    
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  deleteProducts(product : IProduct ): void {
    this.prodService.deleteProduct(product).subscribe(res => {
      this.getProduct()
    })
    
  }

  editProducts(product : IProduct): void {
   
    
      this.idCategory = product.category.id
      this.setCategory(this.idCategory)
      this.productId = product.id
      this.nameUA = product.nameUA
      this.nameEN = product.nameEN
      this.description = product.description
      this.proteins = product.proteins
      this.carbohydrates = product.carbohydrates
      this.fats = product.fats
      this.calorie = product.calorie
      this.weight = product.weight
      this.price = product.price
      this.productImage = product.image
      this.isBlockBtn = false
      

    
  }

  reset() :void {
   
     
      this.nameUA = ''
      this.nameEN = ''
      this.description = ''
      this.proteins = ''
      this.carbohydrates = ''
      this.fats =  ''
      this.calorie = ''
      this.weight = ''
      this.price = null
      this.productImage =  ''
      this.isBlockBtn = true
  }

}
