import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducts } from 'src/app/shared/interfaces/admin/admin-products/admin-protucts.interface';
import { Products } from 'src/app/shared/models/admin/admin-products/admin-products.model';
import { AdminProductsService } from 'src/app/shared/services/admin-products/admin-products.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-products-add',
  templateUrl: './modal-products-add.component.html',
  styleUrls: ['./modal-products-add.component.scss']
})
export class ModalProductsAddComponent implements OnInit {
  @Input() arr :IProducts[]
  @Output() modalHide = new EventEmitter()

  @Input() product : IProducts 



  uploadProgrs:Observable<number>

  alert: boolean

  constructor(
    public adminProductsServices : AdminProductsService,
    private storage:  AngularFireStorage
  ) { }
  
  ngOnInit(): void {
   
    
  }

  
  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  close():void {
    this.modalHide.emit()
  }
  
  getAmdinProducts():void{
    this.modalHide.emit()
  }

  getAdmin(products : IProducts):void {
    this.adminProductsServices.addProducts(products).subscribe(products =>{
      this.getAmdinProducts()
    })
  }
  
  addProsucts():void {
    const value = this.product.category.length > 0 && this.product.description.length > 0 && this.product.images.length > 0 && this.product.name.length > 0 && this.product.price != null
    const products = new Products(1,this.adminProductsServices.inpValue.category,this.adminProductsServices.inpValue.name,this.adminProductsServices.inpValue.price,this.adminProductsServices.inpValue.description,this.adminProductsServices.inpValue.images)
    if(this.adminProductsServices.isBtn === true){
      
      if(value){
        if(this.arr.length > 0 ) {
          products.id = this.arr.slice(-1)[0].id +1
        }
        this.getAdmin(products)
      }
   }
    if(this.adminProductsServices.isBtn === false) {
      products.id = this.adminProductsServices.id
      this.adminProductsServices.editProducts(products).subscribe(products => {
        this.getAmdinProducts()
       })
    }
    
  }


  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `pizza/${this.uuid()}.${file.type.split('/')[1]}`;
    const task = this.storage.upload(filePath, file)
    this.uploadProgrs = task.percentageChanges()
    task.then(result => this.storage.ref(`pizza/${result.metadata.name}`).getDownloadURL().subscribe(img => {
      this.product.images = img
    })
    ).then(set => {
      this.alert = true
    })
    
  }
  
}
