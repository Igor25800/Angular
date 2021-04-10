import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  
  transform(value: Array<any>, seachName:any): unknown {
      if(!value){
        return []
      }
      if(!seachName) {
        return value
      }
      return  value.filter(user=>
        user.name.toLowerCase().includes(seachName.toLowerCase()) ||
        user.category?.toLowerCase().includes(seachName.toLowerCase()) ||
        user.price?.toLowerCase().includes(seachName) 
      ) 
    }
  

}
