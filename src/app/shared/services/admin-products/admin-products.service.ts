import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProducts } from '../../interfaces/admin/admin-products/admin-protucts.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminProductsService {

  isBtn:boolean 
  id:number

  inpValue: IProducts = {
    id: null,
    category: '',
    name: '',
    description: '',
    price: null,
    images: ''
  }

  products : IProducts[] = []

  private url = environment.url

  constructor(
    private http :HttpClient
  ) {
    this.url += 'products'
   }

   getProducts(): Observable<IProducts[]> {
     return this.http.get<IProducts[]>(this.url)
   }

   addProducts(products: IProducts): Observable<IProducts> {
     return this.http.post<IProducts>(this.url,products)
   }

   editProducts(products: IProducts): Observable<IProducts> {
     return this.http.put<IProducts>(`${this.url}/${products.id}`,products)
   }

   deleteProducts(id: number): Observable<IProducts> {
     return this.http.delete<IProducts>(`${this.url}/${id}`)
   }

}
