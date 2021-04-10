import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IBlogs ,Blogs } from 'src/app/shared/interfaces/Angular-blog/blog.interfaces';
import { IUser ,User } from 'src/app/shared/interfaces/Angular-blog/user.interfaces';


import { BlogsService } from 'src/app/shared/services/Angular-Blog/blogs/blogs.service';
import { UsersService } from 'src/app/shared/services/Angular-Blog/users/users.service';

@Component({
  selector: 'app-modal-sing-in',
  templateUrl: './modal-sing-in.component.html',
  styleUrls: ['./modal-sing-in.component.scss']
})
export class ModalSingInComponent implements OnInit {

  @Output() modal = new EventEmitter()

  email:string
  password:string

  curentId : number

  arrBlog = this.blogsService.blogsArr
  arrUser = this.userService.userArrName
  

  constructor(
    public userService : UsersService,
    public blogsService : BlogsService,
  ) { }

  ngOnInit(): void {
    
  }

  fastIn(){
    this.email  = 'admin@gmail.com'
    this.password = 'admin'
  }

  close() :void {
    this.modal.emit()
  }

  params(params?):void{
    this.modal.emit(params)
  }

  login():void{
    const user = this.arrUser.find(el=> el.email === this.email && el.password === this.password)
   
    if(user){
      this.email = ''
      this.password = ''
      const params = {
        isBtn : false,
        nameBtn : user.username,
        btn : true,
        isAdmin : user.isAdmin,
        userServ: user.id
      }
      this.params(params)
      // this.userService.id = user.id
      this.close()
      }
    }

   
}
