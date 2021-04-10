import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

import { IBlogs ,Blogs } from 'src/app/shared/interfaces/Angular-blog/blog.interfaces';
import { IUser ,User } from 'src/app/shared/interfaces/Angular-blog/user.interfaces';

import { BlogsService } from 'src/app/shared/services/Angular-Blog/blogs/blogs.service';
import { UsersService } from 'src/app/shared/services/Angular-Blog/users/users.service';


@Component({
  selector: 'app-modal-add-post',
  templateUrl: './modal-add-post.component.html',
  styleUrls: ['./modal-add-post.component.scss']
})
export class ModalAddPostComponent implements OnInit {

  @Output() modal = new EventEmitter()
  @Input() paramsObj : {isButt:boolean, nameBtn:string, userId:number}
  @Input() editableBlock 
  
  
  iduser:number = 2
  curentId: number = 2
  title:string
  textArea :string
  isbtn:boolean
  id
  data: Date = new Date()

  arrBlog = this.blogsService.blogsArr
  arrUser = this.userService.userArrName
  

  constructor(
    public blogsService : BlogsService,
    public userService :UsersService
  ) { }

  ngOnInit(): void {
    this.paras()
  }

  paras() :void{
    this.title = this.editableBlock ? this.editableBlock.topic : ''
    this.textArea = this.editableBlock ? this.editableBlock.message : ''
  }
  
  close() :void {
    this.modal.emit({
      title: this.title,
      textArea : this.textArea
     })
  }

  addBlock():void{
   
    if(this.title?.length > 0 && this.textArea?.length > 0) {
      const blogBlock :IBlogs = new Blogs(
        this.paramsObj.userId,
        this.paramsObj.nameBtn, 
        this.title,
        this.data,
        this.textArea,
        this.id
      )
        this.arrBlog.push(blogBlock)
        this.title = ''
        this.textArea = ''
        this.close()
      
      }
    }
    saveBlock(){
        this.editableBlock.topic = this.title
        this.editableBlock.message  = this.textArea
        this.close()
    }

    

}
