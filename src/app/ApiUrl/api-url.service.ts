import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  constructor() { }

  //Urls

  // UserController
  public UserUrl = {
    Login: 'Users/Login',
    Register : '',
    Delete : '',
  };

  // For BlogController
  public BlogUrl = {
    Add : 'Blogs/AddBlog',
    GetByCategory : 'Blogs/GetByCategoryId?categoryId=123',
    GetByUser : 'Blogs/GetByUser',
    GetRecent : 'Blogs/GetRecent',
    GetByBlogID : 'Blogs/GetByBlogId?BlogID=@BlogId'
  }

  // For CommonControoler
  public CommonUrl = {
    GetCateogry : 'Common/getCategories'
  }

  // For ReviewControoler
  public ReviewUrl = {
    GetAllReviews : 'Review/GetReviewByID?BlogID=@BlogId',
    AddReview : 'Review/AddReview?BlogId=@BlogId&Review=@Review'
  }

}
