import { Pipe, PipeTransform } from '@angular/core';
import  { IBook } from "src/app/shared/interfaces/number.interfaces"

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value:IBook[], searchName : string): unknown {
     if(!value){
       return []
     }
     if(!searchName){
       return value
     }
     return value.filter(user =>{
       return user.firstName.toLowerCase().includes(searchName.toLowerCase()) ||
       user.lastName.toLowerCase().includes(searchName.toLowerCase()) ||
       user.number.toLowerCase().includes(searchName.toLowerCase())
     })
  }

}
