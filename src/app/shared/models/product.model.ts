import { IProduct } from '../interfaces/product.interface';
import { ICategory } from '../interfaces/category.interface';

export class Product implements IProduct {
    constructor(
        public id: number,
        public category: ICategory,
        public nameUA: string,
        public nameEN: string,
        public description: string,
        public price: number,
        public weight: string,
        public count: number,
        public  proteins : string,
        public  carbohydrates: string,
        public  fats: string,
        public  calorie : string,
        public image?: string,
        public size?: number
    ) {}
}
