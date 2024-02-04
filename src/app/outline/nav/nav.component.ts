import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router: Router) {}

  scrollToAbout() {
    // Use Angular Router to navigate to the current route (in this case, '/home')
    this.router.navigate(['/home']).then(() => {
      // Scroll to the 'about' section after navigation
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
