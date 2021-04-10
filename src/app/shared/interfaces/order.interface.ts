import { IProduct } from './product.interface';

export interface IOrder {
    id: number;
    userName: string;
    userPhone: string;
    userCity: string;
    userStreet: string;
    userHouse: number;
    orders: IProduct[];
    totalPrice: number;
    userComment: string;
    money:string,
    delivery:string,
    data: string,
    time : string
    
}