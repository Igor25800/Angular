export interface IUser  {
    id:number,
    username:string,
    email: string,
    password: string,
    isAdmin: boolean
   
}

export class User implements IUser {
    constructor(
        public id:number,
        public username:string,
        public email: string,
        public password: string,
        public isAdmin: boolean
    ){}
}