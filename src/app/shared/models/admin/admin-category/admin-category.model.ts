import { ICategory } from "src/app/shared/interfaces/admin/admin-category/admin-category.interface";


export class Category implements ICategory {
    constructor(
        public id:number,
        public name: string
    ){}
}