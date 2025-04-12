import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogView } from '../Models/blog-view';
import { Categories } from '../Models/Categories';
import { ReviewViewModel } from '../Models/ReviewViewModel ';
import { Router } from '@angular/router';

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  content: string;
  category: string;
  date: string;
  readTime: number;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private baseUrl = 'https://localhost:7228/api/';
  constructor(private http : HttpClient, private router : Router) { }

  Login(endpoint: string, data: {email:string ,password:string}): Observable<any> {
      return this.http.post(`${this.baseUrl}${endpoint}`,data, {responseType:"json"})
  }

  Logout()
  {
      localStorage.clear();
      this.router.navigateByUrl('/home');
  }

  // BlogControoler
  GetBlogByCurrentUser(endpoint:string):Observable<any>{
    return this.http.get<BlogView[]>(this.baseUrl + endpoint);
  }

  getRecentBlogs(endpoint:string):Observable<any>
  {
    return this.http.get<BlogView[]>(this.baseUrl + endpoint);
  }

  getBlogByBlogId(endpoint:string, blogID:string):Observable<any>{
    endpoint = endpoint.replace("@BlogId", blogID);
    return this.http.get<BlogView>(this.baseUrl + endpoint)
  }

  // Common BlogControoler
  getAllCategories(endpoint : string) : Observable<any>
  {
      return this.http.get<Categories[]>(this.baseUrl + endpoint)
  }

  // Review Controoler
  getAllReviews(endpoint: string, blogID: string): Observable<any> {
    endpoint = endpoint.replace("@BlogId", blogID);
    return this.http.get<ReviewViewModel>(this.baseUrl + endpoint);
  }
  
  AddReview(endpoint: string, blogId: string, comment: string): Observable<any> {
    // Ensure the endpoint includes query parameters
    endpoint = endpoint.replace("@BlogId", encodeURIComponent(blogId))
                       .replace("@Review", encodeURIComponent(comment));
  
    return this.http.post(this.baseUrl + endpoint, {}); // Sending an empty body as the data is in query params
  }
  
  // https://localhost:7228/api/Review/GetReviewByID?BlogID=a7a73773-8c55-4aa1-a5df-829d630e8547
  // https://localhost:7228/api/Review/AddReview?BlogId=a7a73773-8c55-4aa1-a5df-829d630e8547&Review=Not%20Helpful


  private dummyPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Art of Storytelling',
      author: 'Sarah Johnson',
      content: 'Exploring narrative techniques that captivate readers...',
      category: 'Writing Tips',
      date: '2024-03-15',
      readTime: 8,
      image: 'assets/images/post1.jpg'
    },
    // Add more dummy posts...
  ];

  private categories = ['All', 'Writing Tips', 'Creative Writing', 'Poetry', 'Technical Writing'];

  getPosts(): BlogPost[] {
    return this.dummyPosts;
  }

  getCategories(): string[] {
    return this.categories;
  }
}
