import { Component, OnInit ,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AdminProductsService } from 'src/app/shared/services/admin-products/admin-products.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IProducts } from 'src/app/shared/interfaces/admin/admin-products/admin-protucts.interface';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {


  arrProducts: IProducts[] = []
  switch:string
  idDelete: number
  filter:string

  obj : IProducts

  modalRef: BsModalRef;

  constructor(
    private adminProductsServices : AdminProductsService,
    private modalService: BsModalService
  
  ) { }

  ngOnInit(): void {
    this.getAmdinProducts()
    this.serviseInit()
    
    
  }

  serviseInit() {
    this.obj = this.adminProductsServices.inpValue
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { id: 1, class: 'modal-lg modal-dialog-centered', backdrop: 'static' });
    
  }
  
  openModalDelete(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm modal-dialog-centered' });
  }

  close() :void{
    this.modalRef.hide()
  }


  getAmdinProducts(): void{
    this.adminProductsServices.getProducts().subscribe(products => {
      if(products) this.arrProducts = products
    })
  }

  deleteProducts(products:IProducts):void {
    this.swt('delete')
    this.idDelete = products.id
  }

  swt(name : string) {
    this.switch = name
  }

  editProducts(products : IProducts) :void {
    // let objCopy = {...products}
    this.obj = products
    // this.adminProductsServices.inpValue = objCopy
    this.swt('add')
    this.adminProductsServices.isBtn  = false
    this.adminProductsServices.id = products.id
  }

  reset():void {
    this.swt('add')
    this.adminProductsServices.isBtn  = true
    this.obj.category = ''
    this.obj.name = ''
    this.obj.price = null
    this.obj.images = ''
    this.obj.description = ''
    
    
  }

}
