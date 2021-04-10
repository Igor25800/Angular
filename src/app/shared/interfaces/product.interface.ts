import { ICategory } from './category.interface';

export interface IProduct {
    id: number;
    category: ICategory;
    nameUA: string;
    nameEN: string;
    description: string;
    price: number;
    weight: string;
    count: number;
    proteins : string,
    carbohydrates: string,
    fats: string,
    calorie : string,
   
    image?: string;
    size?: number;
}
