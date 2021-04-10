import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/admin/admin-blog/admin-blog.interface';
import { AdminBlogService } from 'src/app/shared/services/admin-blog/admin-blog.service';

@Component({
  selector: 'app-table-blog',
  templateUrl: './table-blog.component.html',
  styleUrls: ['./table-blog.component.scss']
})
export class TableBlogComponent implements OnInit {

  @Input() adminBlog : IBlog[]
  @Input() textValue : {blogId :number , isEditState:boolean,text:string, title:string , autor:string}
  @Output() edit = new EventEmitter()

  constructor(
    private adminBlogServices : AdminBlogService
  ) { }

  ngOnInit(): void {
  }
  
  getBlog() {
    this.edit.emit()
  }

  editBlog(blog: IBlog): void {
    this.textValue.blogId = blog.id
    this.textValue.isEditState = false
    this.textValue.text = blog.text
    this.textValue.title = blog.title
    this.textValue.autor = blog.autor
  }

  deleteBlog(blog: IBlog) :void {
    this.adminBlogServices.deleteBlog(blog.id).subscribe(id =>{
          this.getBlog()
    })
  }
}
