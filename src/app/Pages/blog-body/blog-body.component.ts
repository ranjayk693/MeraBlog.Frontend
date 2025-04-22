import { Component } from '@angular/core';
import { CommonService } from '../../Services/common.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
@Component({
  selector: 'app-blog-body',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-body.component.html',
  styleUrl: './blog-body.component.css'
})
export class BlogBodyComponent{
    // constructor(private blogApi : CommonService, private apiUrl : ApiUrlService, private data : DataService) {
    //   this.getAllBlogs();
    // }

    // ngOnInit(){
    //   this.blogApi.getAllCategories(this.apiUrl.CommonUrl.GetCateogry).subscribe(res => {
    //     this.categories = [];
    //     this.categories = res;
    //     console.log("Orignianl Response : ", res);
    //     console.log("Category Response : ",this.categories);
    //   })
    // }

    // originalArticle : BlogView[] = [];
    // articles : BlogView[] = [];
    // categories : Categories[] = [];

    // getShortDescription(text: string): string {
    //   return text.split(' ').slice(0, 30).join(' ') + '...';
    // }

    // readMore(id: string) {
    //   console.log(`Navigate to article ID: ${id}`);
    // }

    // filterBy(type: string) {
    //   console.log(`Filtering by: ${type}`);
    // }

    // searchArticles(event: any) {
    //   const query = event.target.value.toLowerCase();
    //   console.log(`Searching for: ${query}`);
    //   // Implement your search logic here
    // }

    // filterByCategory(event: any) {
    //   const selectedCategory = event.target.value;
    //   this.articles = this.originalArticle.filter(f => f.categoryId === selectedCategory)
    //   if(selectedCategory === "All")
    //     this.articles = this.originalArticle.filter(f => f.id)
    //   console.log(`Filtering by category: ${selectedCategory}`);
    //   // Implement category filter logic here
    // }

    // getAllBlogs()
    // {
    //   this.blogApi.getRecentBlogs(this.apiUrl.BlogUrl.GetRecent).subscribe(res => {
    //     console.log(res);
    //     this.data.LoadBlog(res);
    //     this.originalArticle = [];
    //     this.articles = [];
    //     this.originalArticle = res;
    //     this.articles = res;
    //     console.log("This Article ",this.articles);
    //   }, err =>{
    //     console.error(err);
    //   })
    // }
    posts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  categories: string[] = [];
  selectedCategory = 'All';
  searchQuery = '';

  constructor(private blogService: CommonService) { }

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
    this.filteredPosts = [...this.posts];
    this.categories = this.blogService.getCategories();
  }

  applyFilters(): void {
    this.filteredPosts = this.posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                            post.author.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All' || 
                             post.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }
}
