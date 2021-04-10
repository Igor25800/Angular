import { IBlog } from "src/app/shared/interfaces/admin/admin-blog/admin-blog.interface";

export class Blog implements IBlog { 
   constructor(
    public id:number,
    public title:string,
    public text:string,
    public date:Date,
    public autor:string
   ){}
}
