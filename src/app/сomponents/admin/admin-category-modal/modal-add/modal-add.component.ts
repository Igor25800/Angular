import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/admin/admin-category/admin-category.interface';
import { Blog } from 'src/app/shared/models/admin/admin-blog/admin-blog.modul';
import { Category } from 'src/app/shared/models/admin/admin-category/admin-category.model';
import { AdminCategoryService } from 'src/app/shared/services/admin-category/admin-category.service';


@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {
  @Input() arr: Category[]
  @Output() modalHide = new EventEmitter()

  isBtn:boolean
  
  btnClose:boolean = true
  add:boolean 

  id:number

  constructor(
    public adminCategoryServices : AdminCategoryService
  ) { }

  

  ngOnInit(): void {
    
  }


  getAmdinCategory():void {
    this.modalHide.emit()
  }

  close():void {
    this.modalHide.emit()
  }

  disabledBtn():boolean {
    if(this.adminCategoryServices.name?.length > 0){
      return this.add = false
    }
    return this.add = true
  }

  addCategory(): void {
    
    const category = new Category(1,this.adminCategoryServices.name)
    if(this.adminCategoryServices.isBtn === true){
      if(this.arr.length > 0 ) {
        category.id = this.arr.slice(-1)[0].id +1
      }
      this.adminCategoryServices.addCategory(category).subscribe( res =>{
        this.getAmdinCategory()
        
      })
    }

    if(this.adminCategoryServices.isBtn === false) {
     category.id = this.adminCategoryServices.id
      
      this.adminCategoryServices.editCategory(category).subscribe(category => {
        this.getAmdinCategory()
      
      })
      
    }
   
  }
}
