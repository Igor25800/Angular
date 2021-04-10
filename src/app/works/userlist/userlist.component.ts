import { Component, OnInit } from '@angular/core';
import { IUser,User,arrUser } from 'src/app/shared/interfaces/user.interfaces';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  id:number = 7
  arr = arrUser

  nameValue:string
  newUser:string

  isCheck:boolean 
  isBlock:boolean =false
  nameObj:object
  isnewCheck:boolean 
  isBoleam:boolean = true
  
  constructor() { }

  ngOnInit(): void {
  }

  addUser():void {
    if(this.newUser?.length > 0) {
      const user:IUser = new User (
      this.id++,
      this.newUser,
      this.isCheck,
      this.isBoleam
      )
      this.arr.push(user)
      this.newUser = ''
      arrUser.length
    }
  }

  delete(index:number):void {
    this.arr.splice(index,1)
  }
  
  editUser(name:IUser):void {
    this.isBlock = true
    this.nameValue = name.task
    this.nameObj = name

  }

  saveUser(objName:IUser):void {
    objName.task = this.nameValue
    this.isBlock = false
  }
  check(e, name:IUser){
    if(e.target.checked === true){
      name.isBoleam = false
     
    }else{
      name.isBoleam = true
    }
  name.isCheck = e.target.checked
  }

}
