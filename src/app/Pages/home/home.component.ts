import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BlogBodyComponent } from "../blog-body/blog-body.component";
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, BlogBodyComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // component = {
  //   showDetail : false,
  //   showBlog : true
  // }
  // constructor(private router : Router){
  //   this.router.events.subscribe((event) => {
  //     if(event instanceof BlogDetailComponent)
  //     {
  //         this.component.showBlog = false;
  //         this.component.showDetail = true;
  //     }
  //     else{
  //         this.component.showBlog = true;
  //         this.component.showDetail = false;
  //     }
  //   })
  // }
  features = [
    {
      icon: 'fas fa-pen-nib',
      title: 'Create Beautiful Posts',
      description: 'Craft your stories with our intuitive editor and rich formatting options.'
    },
    {
      icon: 'fas fa-users',
      title: 'Join a Community',
      description: 'Connect with like-minded writers and engage in meaningful discussions.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Track Your Growth',
      description: 'Get insights into your readership and improve your writing skills.'
    }
  ];

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar instanceof HTMLElement) {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
      }
    }
  }

  ngAfterViewInit(): void {
    // Feature card animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card').forEach((card) => {
      observer.observe(card);
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
}