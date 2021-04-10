export interface IBlogs  {
    iduser:number,
    postedBy:string,
    topic: string,
    date: Date,
    message: string,
    ovnerId : number
    
   
}

export class Blogs implements IBlogs {
    constructor(
        public iduser:number,
        public postedBy:string,
        public topic: string,
        public date: Date,
        public message: string,
        public ovnerId : number
        
       
    ){}
}