import { Component, OnInit,ViewChild,Output,Input, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal'
import { AdminProductsService } from 'src/app/shared/services/admin-products/admin-products.service';


@Component({
  selector: 'app-modal-products-delete',
  templateUrl: './modal-products-delete.component.html',
  styleUrls: ['./modal-products-delete.component.scss']
})
export class ModalProductsDeleteComponent implements OnInit {

  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  @Output() hideModule = new EventEmitter
  @Input() idDelete : number

  constructor(
    private adminProductsServices : AdminProductsService,
  ) { }

  ngOnInit(): void {
  }

  hide() :void{
    this.hideModule.emit()
  }

  getAmdinProducts():void{
    this.hideModule.emit()
  }

  delete() {
    this.adminProductsServices.deleteProducts(this.idDelete).subscribe(products => {
      this.getAmdinProducts()
    })
  }
}
