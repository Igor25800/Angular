import { Pipe, PipeTransform } from '@angular/core';
import { IOrder } from '../interfaces/order.interface';

@Pipe({
  name: 'value'
})
export class ValuePipe implements PipeTransform {

  transform(value: any[] , name?:string): any {
    if(!value){
      return ''
    }

    switch(name) {
      case  'nameUA' : 
      return value.reduce((acum , el , arr) =>  acum + ',' + el.nameUA, '').slice(1)
      case 'category' : 
      return value.reduce((acum , el , arr) =>  acum + ',' + el.category.nameUA, '').slice(1)
      case 'count' : 
      return value.reduce((acum , el , arr) =>  acum + ',' + el.count + 'шт', '').slice(1)
      case 'грн' : 
      return value + ' Грн' 
      case 'images' : 
      return  value.map(el=> el.image)
    }
    
  }

}
