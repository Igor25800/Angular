import { Data } from '@angular/router';
import { IOrder } from '../interfaces/order.interface';
import { IProduct } from '../interfaces/product.interface';

export class Order implements IOrder {
    constructor(
        public id: number,
        public userName: string,
        public userPhone: string,
        public userCity: string,
        public userStreet: string,
        public userHouse: number,
        public orders: IProduct[],
        public totalPrice: number,
        public userComment: string,
        public money:string,
        public delivery:string,
        public data: string,
        public time : string
      
    ){}
}