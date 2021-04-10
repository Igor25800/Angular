import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../../interfaces/admin/admin-category/admin-category.interface';

import { Category } from '../../models/admin/admin-category/admin-category.model';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {


  isBtn:boolean
  name:any
  category : ICategory[] = []
  id:number
  nameTitle:string
  switch:string

  private url = environment.url

  constructor(
    private http :HttpClient
  ) {
    this.url += 'category'
   }

  getCategory():Observable<Category[]> {
     return this.http.get<Category[]>(this.url)
  }

  addCategory(category: Category):Observable<Category> {
    return this.http.post<Category>(this.url, category)
  }

  editCategory(category:Category):Observable<Category> {
    return this.http.put<Category>(`${this.url}/${category.id}`, category)
  }

  deleteCategory(id:number) :Observable<Category> {
    return this.http.delete<Category>(`${this.url}/${id}`)
  }
}
