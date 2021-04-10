export interface IBook {
    id:number
    firstName:string,
    lastName:string,
    number: string
}

export class MyBook implements IBook{
     constructor(
         public id :number,
         public firstName:string,
         public lastName:string,
         public number: string
     ){}
}

