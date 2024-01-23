import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categories = [
    'Dessert',
    'Family',
    'Resturants',
  ];

  constructor(private router: Router) {}

  goToComponent(category: string) {
    // Navigate to the corresponding category component based on the category name
    this.router.navigate([category]);
  }
  
}

