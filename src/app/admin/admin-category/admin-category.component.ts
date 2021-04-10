import { Component, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Category } from 'src/app/shared/models/category.model';
import { Observable, of } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {
  categoryID: number;
  nameUA: string;
  nameEN: string;
  editStatus: boolean;
  adminCategory: Array<ICategory> = [];
  @ViewChild('id') elem
  isCOmpleted = false
  
  categoriImage:string
  isClass:boolean   = false

  uploadProgress:Observable<number>

  constructor(
    private catService: CategoriesService,
    private storage: AngularFireStorage
   
    ) { }

  ngOnInit(): void {
    this.getCategory();
    
  }

  private getCategory(): void {
    this.catService.getCategory().subscribe(data => {
      this.catService.s.next(data)
      this.adminCategory = data;
        
        
      }
    );
  }

  public addCategory(): void {

  
    const category: ICategory = new Category(1, this.nameUA, this.nameEN ,this.categoriImage);

    if(this.isClass === false) {

      if (this.adminCategory.length > 0) {
        category.id = this.adminCategory.slice(-1)[0].id + 1;
        
      }
      this.catService.addCategory(category).subscribe(() => {
          this.getCategory();
      })
      
    }else{
        category.id = this.categoryID
        this.catService.updateCategory(category).subscribe(()=>{
          this.getCategory()
        
        })
        this.isClass = false
        
        
    }

    this.nameEN = ''
    this.nameUA = ''
    
    
    
   
  }

  public deleteCategory(category: ICategory): void {
    this.catService.deleteCategory(category).subscribe(() => {
        this.getCategory();
      }
    );
  }

  public editCategory(category: ICategory) {
    this.categoryID = category.id
    this.nameUA = category.nameUA
    this.nameEN = category.nameEN
    this.categoriImage = category.images
    this.isClass = true
  }


  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `category/${this.uuid()}.${file.type.split('/')[1]}`;
    const task = this.storage.upload(filePath, file);
    this.isCOmpleted = true
    

    this.uploadProgress = task.percentageChanges();
    task.then( result => {
      this.storage.ref(`category/${result.metadata.name}`).getDownloadURL().subscribe( img => {
        this.categoriImage = img;
      } )
    }).then(ss=>{
      // if( this.uploadProgress = of(100)) {
      //   this.uploadProgress = of(0)
      // }
       
      
      
    })
  

  }








  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
