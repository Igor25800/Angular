import { Component, OnDestroy, OnInit ,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/shared/interfaces/admin/admin-category/admin-category.interface';
import { Category } from 'src/app/shared/models/admin/admin-category/admin-category.model';
import { AdminCategoryService } from 'src/app/shared/services/admin-category/admin-category.service';


@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit, OnDestroy {

 
  modalRef: BsModalRef;
  filter
  nameValue:string
  idDelete:number

  arrCategory:ICategory[] = []
  switch:string
  id:number

  categorySubcriprion :Subscription
 
  

  constructor(
    private modalService: BsModalService,
    public adminCategoryServices : AdminCategoryService
    ) {}
 
  ngOnInit(): void {
    this.getAmdinCategory()
  }

  openSwitch() :void {
    this.adminCategoryServices.switch = this.switch
  }

  ngOnDestroy() :void {
    this.categorySubcriprion.unsubscribe()
  }

  openModalDelete(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-dialog-centered' });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template , {class: 'modal-dialog-centered'});
  }

  title():void {
    this.adminCategoryServices.nameTitle = 'Add'
  }

  close(){
    this.modalRef.hide()
  }
 
  getAmdinCategory():void{
    this.categorySubcriprion = this.adminCategoryServices.getCategory().subscribe(category =>{
      if(category) this.arrCategory = category
    })
  }

  swt(isBTn:boolean):void{
    this.switch= 'add'
    this.adminCategoryServices.isBtn = isBTn
    this.adminCategoryServices.name = ''
    
  }

  deleteCategory(category:ICategory): void {
    this.switch = 'delete'
    this.idDelete = category.id
    
   
  }

  editCategory(category:ICategory):void {
    this.swt(false)
    this.adminCategoryServices.name = category.name
    this.adminCategoryServices.id = category.id
    this.adminCategoryServices.nameTitle = 'Edit'
    
  }
  
}
