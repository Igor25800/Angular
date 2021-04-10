import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  arrLogin:Array<string> = []
  newLogin:string

  arrPassword:Array<string> = []
  newPassword:string

  arrEmail:Array<string> = []
  newEmail:string

  isBtnAdd:boolean = true
  isBtnEdit:boolean = false
  isDisavled:boolean= false

  editIndex:number

  constructor() { }

  ngOnInit(): void {
  }

  addUser():void{
    if(this.newLogin?.length > 0  && this.newPassword?.length > 0 &&  this.newEmail?.length > 0){
      this.arrLogin.push(this.newLogin)
      this.arrEmail.push(this.newEmail)
      this.arrPassword.push(this.newPassword)

      this.newLogin = ''
      this.newEmail = ''
      this.newPassword = ''
    }
   
  }

  deleteUser(index:number):void{
    this.arrLogin.splice(index,1)
    this.arrEmail.splice(index,1)
    this.arrPassword.splice(index,1)
  }

  editUser(index:number):void{
    this.newLogin = this.arrLogin[index]
    this.newPassword = this.arrPassword[index]
    this.newEmail = this.arrEmail[index]

    this.isBtnAdd = false
    this.isBtnEdit = true
    
    this.isDisavled = true
    this.editIndex =  index
  }

  addSaveUser():void{
   
    this.isBtnEdit = false
    this.isBtnAdd = true
    this.isDisavled = false
    
    this.arrLogin[this.editIndex] = this.newLogin     
    this.arrPassword[this.editIndex] = this.newPassword    
    this.arrEmail[this.editIndex] = this.newEmail     
    
    this.newLogin = ''
    this.newEmail = ''
    this.newPassword = ''
    
  }
}
