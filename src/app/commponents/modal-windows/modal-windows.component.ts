import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

import { UsersService } from 'src/app/shared/services/Angular-Blog/users/users.service'
import { IUser, User } from 'src/app/shared/interfaces/Angular-blog/user.interfaces'



import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Blogs, IBlogs } from 'src/app/shared/interfaces/Angular-blog/blog.interfaces';
import { BlogsService } from 'src/app/shared/services/Angular-Blog/blogs/blogs.service';




@Component({
  selector: 'app-modal-windows',
  templateUrl: './modal-windows.component.html',
  styleUrls: ['./modal-windows.component.scss']
})
export class ModalWindowsComponent implements OnInit {

  @Input() inputSwitch : string
  // @Input() modalref : BsModalRef
  @Output() ref  = new EventEmitter()

 

  userName :string
  email:string
  password : string

  
  isBut:boolean
  nameBtn:string
  isAdmin:boolean
  btn

  iduser:number = 2
  title:string

  // model :BsModalRef
  
  id = 1

  obj : object 

  arrUser = this.userService.userArrName
  arrBlog = this.blogsService.blogsArr

  modalRef: BsModalRef;
  data: Date;
  textArea: string;

  constructor(
    private modalService: BsModalService,
    private userService: UsersService,
    private blogsService : BlogsService
    ) {}
 
   
 
  close1(params?) :void {
    this.ref.emit(params)
  }
 
 
  ngOnInit(): void {
  }
 
  login():void{
  
     const curentUser = this.arrUser.find(el=> el.email === this.email  )

      if(curentUser &&  curentUser.password === this.password){
          this.email = ''
          this.password = ''
          this.isBut = false
          // this.nameBtn = curentUser.username
          // this.isAdmin = curentUser.isAdmin
          this.btn = true
          const params: object = {
            isBtn: false,
            btn: true,
            nameBtn : curentUser.username

          }
          
          this.close1(params)
      }
    }

   addUser():void {
    if(this.userName?.length > 0 && this.email?.length > 0 && this.password?.length > 0) {
      const useradd: IUser = new User(
        this.id++,
        this.userName,
        this.email,
        this.password,
        this.isAdmin 
      )
     
        this.arrUser.push(useradd)
        // this.modalRef.hide()
        this.close1()
        this.userName = ''
        this.email = ''
        this.password = ''
      }
      console.log(this.arrUser);
      
    }

    
  // addBlock():void{
  //   if(this.title?.length > 0 && this.textArea?.length > 0) {
  //     const blogBlock :IBlogs = new Blogs(
  //       this.iduser++,
  //       this.nameBtn,
  //       this.title,
  //       this.data,
  //       this.textArea,
        
  //     )
      
    //     this.arrBlog.push(blogBlock)
    //     // this.modalRef.hide()
    //     this.title = ''
    //     this.textArea = ''
    //     console.log(this.arrBlog);
        
    //   }
    // }

    editBlock(obj:IBlogs): void{
      this.title = obj.topic
      this.textArea = obj.message
      this.obj = obj
      // this.userBtn = obj.userBtn
    }

    saveBlock(): void{
      const  params = {
        title: this.title,
        textArea : this.textArea
      }
      this.close1(params)
      // obj.topic = this.title
      // obj.message = this.textArea
     //  this.modalRef.hide()
   }

    
}
