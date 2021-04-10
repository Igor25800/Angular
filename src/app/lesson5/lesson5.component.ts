import { Component,ViewChild, OnInit,TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { IBlogs,Blogs } from 'src/app/shared/interfaces/Angular-blog/blog.interfaces';
import { IUser, User } from 'src/app/shared/interfaces/Angular-blog/user.interfaces'

import { BlogsService } from "src/app/shared/services/Angular-Blog/blogs/blogs.service"
import { UsersService } from 'src/app/shared/services/Angular-Blog/users/users.service'






@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.scss']
})

export class Lesson5Component implements OnInit {

  switch : string 
  isbut:boolean
 
  value:string 
  isAdmin: boolean = false
  isBut:boolean = true
  btn:boolean = false
  obj :object
  modalRef: BsModalRef;

  id:number

  editableBlock : IBlogs
  
  arrBlog = this.blogsService.blogsArr
  arrUser = this.userService.userArrName
  
  param  = {
    isButt : false,
    nameBtn : '',
    userId: null
  }

  constructor(
    private modalService: BsModalService,
    public blogsService : BlogsService,
    public userService : UsersService
  ) {}

  ngOnInit(): void {
  }

  close(){
    this.modalRef.hide()
  }

  // idUser():number{
  //   return this.userService.id
  // }

  singOut():void{
   
   this.isBut = true ; 
   this.isAdmin = false ; 
   this.btn = false;
   
  }

  params(params:{isBtn:boolean,nameBtn:string,btn:boolean ,isAdmin:boolean , userServ:number }){
    if(params){
      this.isBut = params.isBtn
      this.param.nameBtn = params.nameBtn
      this.btn = params.btn
      this.isAdmin = params.isAdmin
      this.id = params.userServ
    }
    this.param = {...this.param, userId: this.id}
  }

  sign(swt:string){
    const value: object = {
      singIn : 'Sign in',
      singUp : 'Sign up',
      addPost: 'Add Post',
      
    } 
    this.switch = swt
    this.value = value[swt]
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  delete(index:number):void{
    this.arrBlog.splice(index, 1)
  }

  addPost() {
    this.param.isButt = true
    this.editableBlock = null
  }

  editBlock(obj:IBlogs): void{
     this.switch = 'addPost'
     this.param.isButt = false  
     this.editableBlock = obj
    //  console.log(this.id);
  }
  // idu(){
  //   const ss = this.arrBlog.find(el=>el)
  //   console.log(ss.iduser ,'Masarr');
  //   console.log(this.arrBlog);
    
  //   console.log(this.id, 'Id');
  //   // console.log(this.arrBlog);
  //   // console.log(this.arrUser);
    
  // }
  
 
}



