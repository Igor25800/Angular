import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

import { IUser ,User} from 'src/app/shared/interfaces/Angular-blog/user.interfaces';

import { UsersService } from 'src/app/shared/services/Angular-Blog/users/users.service'
 

@Component({
  selector: 'app-modal-sing-up',
  templateUrl: './modal-sing-up.component.html',
  styleUrls: ['./modal-sing-up.component.scss']
})
export class ModalSingUpComponent implements OnInit {
  @Output() modal = new EventEmitter()

  userName:string
  email:string
  password:string

  id = 1
  arrUser = this.userService.userArrName;
  isAdmin: boolean = false
  
  constructor(
    private userService : UsersService
  ) { }

  ngOnInit(): void {
  }

  close() :void {
    this.modal.emit({
      type: 'singUp'
    })
  }
  
  addUser():void{
    if(this.userName?.length > 0 && this.email?.length > 0 && this.password?.length > 0) {
      const useradd: IUser = new User(
        this.id = this.arrUser[this.arrUser.length-1].id+1,
        this.userName,
        this.email,
        this.password,
        this.isAdmin
        )
      
        this.arrUser.push(useradd)
        this.close()
        this.userName = ''
        this.email = ''
        this.password = ''
      
        
      }
  }

}


