import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollup',
  templateUrl: './scrollup.component.html',
  styleUrls: ['./scrollup.component.css']
})
export class ScrollupComponent implements OnInit{

  
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const scrollToTopBtn: HTMLElement | null = document.getElementById('scrollToTopBtn');

      window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          if (scrollToTopBtn) {
            scrollToTopBtn.style.display = 'block';
          }
        } else {
          if (scrollToTopBtn) {
            scrollToTopBtn.style.display = 'none';
          }
        }
      };

      if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        });
      }
    });
  }

}

