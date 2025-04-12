import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewViewModel } from '../../Models/ReviewViewModel ';
import { ReviewView } from '../../Models/ReviewView';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../Services/common.service';
import { ApiUrlService } from '../../ApiUrl/api-url.service';
import { BlogView } from '../../Models/blog-view';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-blog-detail',
  imports: [FormsModule,],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  id: string = "";
  constructor(private route: ActivatedRoute, private router: Router, private api : CommonService, 
    private url : ApiUrlService, private toast: NgToastService) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.api.getAllReviews(this.url.ReviewUrl.GetAllReviews, this.id).subscribe(res => {
       this.reviewModel = res;
    }, err =>{
      this.toast.danger("Failed to fetch reviews");
    });

    this.api.getBlogByBlogId(this.url.BlogUrl.GetByBlogID, this.id).subscribe(res =>{
      this.articles = res;
    }, err =>{
      this.toast.danger("Failed to fetch Blogs");
    })

  }

  articles : BlogView = {
    id : '',
    title: '',
    description: '',
    categoryId: ''
  };

  reviewModel: ReviewViewModel = {
    author: '',
    reviewsViews: []
  };

  GoBack()
  {
    const token = localStorage.getItem('BLGTKN');
    if(token != null && token.length > 0)
    {
      this.router.navigateByUrl('Home/User');
    }
    else
    {
      this.router.navigateByUrl('Home');
    }
  }

  Comment: string = '';
  
  addReview() {
    this.Comment = this.Comment.trim();
    if(this.Comment.length > 1)
    {
      const token = localStorage.getItem('BLGTKN');
      if(token != null && token.length > 0)
      {
        this.api.AddReview(this.url.ReviewUrl.AddReview, this.id, this.Comment).subscribe(res =>{
          this.toast.success("Comment Added Sucessfully");
        }, err =>{
          this.toast.danger("Failed to add comment");
        })
      }
      else
      {
        this.toast.danger("Login First");
      }
    }
    else{
      this.toast.danger("Please Add Some Comment");
    }
  }
}
