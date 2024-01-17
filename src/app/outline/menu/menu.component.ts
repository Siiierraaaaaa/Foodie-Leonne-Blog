import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  categories = [
    { id: 1, name: 'TikTok Dishes', image: 'assets/menu3.jpg' },
    { id: 2, name: 'Dinner Ideas', image: 'assets/menu1.JPG' },
    { id: 3, name: 'Nola Dishes', image: 'assets/coming soon.jpg' },
    { id: 4, name: 'Appetizers', image: 'assets/menu6.png' },
    { id: 5, name: 'Vegan Dishes', image: 'assets/coming soon.jpg' },
    // Add more categories as needed
  ];
}
