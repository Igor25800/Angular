import { Injectable } from '@angular/core';
import { IBlogs }  from "src/app/shared/interfaces/Angular-blog/blog.interfaces"


@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  blogsArr : IBlogs[] = [
    { iduser: 1, postedBy: 'admin' , topic: 'First post', date: new Date() , message: 'Sign Up to Create create acaunt and start user Angular Blog' , ovnerId : 1},
    
  ]

  

  
  constructor() { }

 
  

}
