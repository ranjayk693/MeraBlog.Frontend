import { Injectable } from '@angular/core';
import { BlogView } from '../Models/blog-view';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  blogs: BlogView[] = [];

  constructor() { }

  //Add Blog List
  LoadBlog(blogs : BlogView[])
  {
    this.blogs = [];
    this.blogs = blogs;
  }

  // Add Blog
  AddBlog(blog : BlogView )
  {
      this.blogs.push(blog);
      
  }

  // Delete Blog
  RemoveBlog(blogID : string)
  {
    this.blogs = this.blogs.filter(e => e.id !== blogID);
  }

  //Get All BLog
  GetAllBLogs()
  {
    return this.blogs;
  }

  //Get Blog By BlogID
  GetById(blogId : string)
  {
    return this.blogs.filter(e => e.id == blogId)
  }

  // Update Blog
  UpdateBlog(blogID : string, blog : BlogView)
  {
     // sort here
  }

  // Clear Blogs
  
}
