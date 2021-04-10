export interface IUser {
    id:number,
    task:any,
    isCheck:boolean,
    isBoleam: boolean
}

export class  User implements IUser {
    
    constructor(
        public id:number=1,
        public task:any,
        public isCheck:boolean,
        public isBoleam: boolean = true
        
    ){}
}

export const arrUser: IUser[] = [
    {id:1,task:'HTML5', isCheck:true ,isBoleam: false},
    {id:2,task:'CSS3', isCheck:true ,isBoleam: false},
    {id:3,task:'SCSS', isCheck:false ,isBoleam: true},
    {id:4,task:'JavaScript', isCheck:false ,isBoleam: true},
    {id:5,task:'JQueary', isCheck:false ,isBoleam: true},
    {id:6,task:'Angular', isCheck:false ,isBoleam: true}
]