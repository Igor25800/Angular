import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/admin/admin-category/admin-category.interface';
import { IProducts } from 'src/app/shared/interfaces/admin/admin-products/admin-protucts.interface';

@Component({
  selector: 'app-table-category',
  templateUrl: './table-category.component.html',
  styleUrls: ['./table-category.component.scss']
})
export class TableCategoryComponent implements OnInit {

  @Input() arrCategory : IProducts[]
  @Input() filter : string

  @Output() opean = new EventEmitter()
  @Output() opeanDelete = new EventEmitter()

  @Output() edit = new EventEmitter()
  @Output() deleteModal = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  openModal() {
    this.opean.emit()
  }

  editCategory(category : ICategory) {
    this.edit.emit(category)
  }

  openModalDelete() {
    this.opeanDelete.emit()
  }

  deleteCategory(category: ICategory){
    this.deleteModal.emit(category)
  }

 
}
