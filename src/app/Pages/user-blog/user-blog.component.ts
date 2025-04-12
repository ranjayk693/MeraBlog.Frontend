import { Component } from '@angular/core';
import { CommonService } from '../../Services/common.service';
import { Router } from '@angular/router';
import { BlogView } from '../../Models/blog-view';
import { ApiUrlService } from '../../ApiUrl/api-url.service';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-user-blog',
  imports: [],
  templateUrl: './user-blog.component.html',
  styleUrl: './user-blog.component.css'
})
export class UserBlogComponent {
  blogs: BlogView[] = [];

  constructor(private http: CommonService, private data : DataService , private router: Router, private urls : ApiUrlService) {}

  ngOnInit(): void {
    this.http.GetBlogByCurrentUser(this.urls.BlogUrl.GetByUser).subscribe((blogs) => {
      this.blogs = blogs;
      this.data.LoadBlog(blogs);
    });
  }

  // Navigate to the blog details view when a title is clicked
  viewBlog(id: string): void {
    this.router.navigate(['/blog', id]);
  }

  // Handle delete
  deleteBlog(id: string): void {
    // this.blogService.deleteBlog(id).subscribe(() => {
    //   this.blogs = this.blogs.filter(blog => blog.id !== id);
    // });
  }
}


// ToDo --> Add Pagination
// Add CSS Grid