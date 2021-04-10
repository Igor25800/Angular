import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBlog } from '../../interfaces/admin/admin-blog/admin-blog.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminBlogService {

  blog :IBlog[] = []

  private url =  environment.url

  constructor(
    private hppt : HttpClient
  ) {
    this.url += 'blog'
   }

  getBlog(): Observable<Array<IBlog>> {
    return this.hppt.get<Array<IBlog>>(this.url)
  }

  addBlog(blog:IBlog): Observable<IBlog> {
    return this.hppt.post<IBlog>(this.url, blog)
  }

  updateBlog(blog:IBlog): Observable<IBlog> {
    return this.hppt.put<IBlog>(`${this.url}/${blog.id}`, blog)
  }

  deleteBlog(id:number): Observable<IBlog> {
    return this.hppt.delete<IBlog>(`${this.url}/${id}`)
  }

}
