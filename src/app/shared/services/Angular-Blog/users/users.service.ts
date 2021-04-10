import { Injectable } from '@angular/core';
import { IUser }  from "src/app/shared/interfaces/Angular-blog/user.interfaces"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  id:number

  userArrName : IUser[] =[
    {id: 1, username: 'admin' , email: 'admin@gmail.com', password:'admin',  isAdmin: true}
  ]

  
  
}
