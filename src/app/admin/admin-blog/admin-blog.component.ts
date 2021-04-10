import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/admin/admin-blog/admin-blog.interface';
import { Blog } from 'src/app/shared/models/admin/admin-blog/admin-blog.modul';
import { AdminBlogService } from 'src/app/shared/services/admin-blog/admin-blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {

  switch = 'Add'
  adminBlog : Array<IBlog> = []

  value = {
    blogId:null,
    title: '',
    isEditState: true,
    text:'',
    autor:''
  }
  
  constructor(
    private adminBlogServices : AdminBlogService
  ) { }

  ngOnInit(): void {
    this.getAdminBlog()
  }

  getAdminBlog():void{
    this.adminBlogServices.getBlog().subscribe(blog =>{
      if(blog){
        this.adminBlog = blog
      }
    }, err =>{
      console.log(err);
    })
  }

  addBlog():void {
  
    if(this.value.title?.length > 0 && this.value.text?.length > 0 && this.value.autor?.length > 0) {
        const blog = new Blog(1,this.value.title,this.value.text,new Date(),this.value.autor)

        if(this.value.isEditState === false) {
          blog.id = this.value.blogId
          this.adminBlogServices.updateBlog(blog).subscribe(blog=>{
            this.getAdminBlog()
            this.resetForm()
          })
        }

       if(this.value.isEditState === true){ 

        if(this.adminBlog.length > 0){
          blog.id = this.adminBlog.slice(-1)[0].id + 1
        }
        
        this.adminBlogServices.addBlog(blog).subscribe(blog => {
          this.getAdminBlog()
          this.resetForm()
        })
      }
    }
  }

  resetForm():void {
    this.value.text = ''
    this.value.title = ''
    this.value.autor = ''
    this.value.isEditState = true
  }

}
