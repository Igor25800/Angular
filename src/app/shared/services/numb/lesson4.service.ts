import { Injectable } from '@angular/core';

import  { IBook } from "src/app/shared/interfaces/number.interfaces"

@Injectable({
  providedIn: 'root'
})
export class Lesson4Service {

  arrMyBook : IBook[] = [
    {id: 1, firstName:'Petay', lastName: 'Zvuk' , number: '06311111'},
    {id: 2, firstName:'Petro', lastName: 'Petriv' , number: '06322222'},
    {id: 3, firstName:'Alejandro', lastName: 'Dell Rio Albachet' , number: '06333333'},
    {id: 4, firstName:'Vasylyna', lastName: 'Vrubevska' , number: '06344444'},
    {id: 5, firstName:'Ira', lastName: 'Tytar' , number: '06355555'},
    {id: 6, firstName:'Sofia', lastName: 'Zhuk' , number: '06366666'},
    
]


  constructor() { }
}
