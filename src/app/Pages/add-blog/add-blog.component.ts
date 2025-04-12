import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Blog } from '../../Models/blog';

@Component({
  selector: 'app-add-blog',
  imports: [ReactiveFormsModule],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css'
})
export class AddBlogComponent {
  blogForm!: FormGroup;
  categories: any = [
    { ID: 1, Name: 'Technology' },
    { ID: 2, Name: 'Travel' },
    { ID: 3, Name: 'Food' },
    { ID: 4, Name: 'Lifestyle' }
  ];

  ngOnInit() {
    this.blogForm = new FormGroup({
      Title: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      BlogContent: new FormControl('', [Validators.required, Validators.maxLength(5000)]),
      CategoryID: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.blogForm.valid) {
      const newBlog: Blog = {
        Title: this.blogForm.value.Title,
        BlogContent: this.blogForm.value.BlogContent,
        CategoryID: +this.blogForm.value.CategoryID
      };
      console.log('New Blog:', newBlog);
      // Add your API call here
      this.blogForm.reset();
    }
  }
}
