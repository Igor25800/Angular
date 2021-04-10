import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBlog } from 'src/app/shared/interfaces/admin/admin-blog/admin-blog.interface';
import { AdminBlogService } from 'src/app/shared/services/admin-blog/admin-blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit ,OnDestroy {

  blog :IBlog[] = []
  blogSubsc : Subscription
  

  constructor(
    private adminBlogServices : AdminBlogService
  ) { }

  ngOnInit(): void {
    this.loadBlog()
  }

  ngOnDestroy(): void{
    this.blogSubsc.unsubscribe()
  }

  loadBlog():void{
   this.blogSubsc = this.adminBlogServices.getBlog().subscribe(blog => {
      if(blog) {
        this.blog = blog
      }
    })
  }

}
