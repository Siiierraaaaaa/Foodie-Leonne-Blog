// app.component.ts
import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      trigger('fadeIn', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('500ms', style({ opacity: 1 })),
        ]),
      ]),
    ],
})
export class AppComponent {
   // Set a flag to determine whether to trigger the animation
   animateOnScroll = false;

   // Define the scroll threshold (adjust this value)
   scrollThreshold = 200;
 
   // Listen for the window scroll event
   @HostListener('window:scroll', ['$event'])
   checkScroll() {
     // Get the current scroll position
     const scrollPosition = window.scrollY || document.documentElement.scrollTop;
 
     // Check if the scroll position is beyond the threshold
     this.animateOnScroll = scrollPosition > this.scrollThreshold;
   }
  }
