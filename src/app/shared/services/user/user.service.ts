import { Injectable } from '@angular/core';


import {IUser } from "src/app/shared/interfaces/user.interfaces"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  arrUser: IUser[] = [
    {id:1,task:'HTML5', isCheck:true ,isBoleam: false},
    {id:2,task:'CSS3', isCheck:true ,isBoleam: false},
    {id:3,task:'SCSS', isCheck:false ,isBoleam: true},
    {id:4,task:'JavaScript', isCheck:false ,isBoleam: true},
    {id:5,task:'JQueary', isCheck:false ,isBoleam: true},
    {id:6,task:'Angular', isCheck:false ,isBoleam: true}
]

  constructor() { }
}
