import { Component, OnInit } from '@angular/core';

import { IBook,MyBook } from 'src/app/shared/interfaces/number.interfaces';
import { Lesson4Service} from 'src/app/shared/services/numb/lesson4.service'


@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.scss']
})
export class Lesson4Component implements OnInit {
 
  id : number  = 7
  arr = this.lessonServise.arrMyBook
  isRevers : boolean = false
  reverse: boolean = false;
  order: string = "firstName";
  firstName:string
  secondName:string
  number:string
  isBlock:boolean
  newArr : Array<object>
  nemUser:IBook
  value:string
  

  constructor(
    public  lessonServise : Lesson4Service
  ) { }

  

  ngOnInit(): void {
    ;
    
  }
  addPhone():void{
    this.isBlock = true
    this.firstName = ''
    this.secondName = ''
    this.number = ''
    console.log(this.arr);
    
    
  }

  save():void{
    const numberBock: IBook = new MyBook(
      this.id++,
      this.firstName,
      this.secondName,
      this.number
    )
    
    this.arr.push(numberBock)
    this.firstName = ''
    this.secondName = ''
    this.number = ''
    
    
  }

  edit(name:IBook):void{
    this.firstName = name.firstName
    this.secondName = name.lastName
    this.number = name.number
    this.isBlock = false
    this.nemUser = name

  }

  editSave(nemUser:IBook):void {
    nemUser.firstName = this.firstName  
    nemUser.lastName =  this.secondName 
    nemUser.number  = this.number 
    
  }
  
  delete(i:number,name:IBook) :void{
    const id = this.arr.findIndex(el=> el.id === name.id)
    console.log(id);
    console.log(name);
    
    
    this.arr.splice(id, 1)
    
  }

  // setOrder(value: string) {
  //   if (this.order === value) {
  //     this.reverse = !this.reverse;
  //   }

  //   this.order = value;
  //   this.isRevers = true
  // }

  sortName(key,revers ) {
    this.arr.sort((a,b)=> {
      if(a[key] > b[key]) return revers ? 1 : -1
      return revers ? -1 : 1
    })
    
    this.reverse = !this.reverse;
    this.order = key;
    this.isRevers = true

  }

}

