import { Component, EventEmitter, Input, OnInit ,Output,ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal'

import { AdminCategoryService } from 'src/app/shared/services/admin-category/admin-category.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  @Output() hideModule = new EventEmitter()
  @Input() idDelete : number

  constructor(
    private adminCategoryServices : AdminCategoryService
  ) { }

  ngOnInit(): void {
  }
  
  hide() :void{
    this.hideModule.emit()
  }

  getCategory():void{
    this.hideModule.emit()
  }

  delete() :void {
  this.adminCategoryServices.deleteCategory(this.idDelete).subscribe(category =>{
      this.getCategory()
    })
  }

}
