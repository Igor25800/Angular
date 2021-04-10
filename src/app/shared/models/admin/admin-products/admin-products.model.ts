import { IProducts } from "src/app/shared/interfaces/admin/admin-products/admin-protucts.interface";

export class Products implements IProducts {
    constructor(
    public  id:number,
    public  category:string,
    public  name:string,
    public  price:number,
    public  description:string,
    public  images: string
    ){}
}