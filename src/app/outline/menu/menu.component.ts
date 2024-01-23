import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  categories = [
    { id: 'nola', name: 'Nola', image: 'assets/coming soon.jpg' },
    { id: 'Favs', name: 'Dinner Ideas', image: 'assets/menu1.JPG' },
    { id: 'tiktok', name: 'TikTok Dishes', image: 'assets/menu3.jpg' },
    { id: 'vegan', name: 'Vegan', image: 'assets/coming soon.jpg' },
    { id: 'apps', name: 'Appetizers', image: 'assets/menu6.png' }


  ];

  constructor(private router: Router) { }

  goToComponent(category: string) {
    // Navigate to the corresponding category component based on the category name
    this.router.navigate([category]);
  };
}
