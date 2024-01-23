import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}
  
  goToComponent() {
    // Replace 'your-component-path' with the actual path of the component you want to navigate to
    this.router.navigate(['/Favs']); //quick dinner ideas
    this.router.navigate(['/dessert']); //desserts
    this.router.navigate(['/Resturants']); //resturants
    this.router.navigate(['/Family']); //dinner ideas
    this.router.navigate(['/tiktok']); //tiktok 
    this.router.navigate(['/apps']); //apps
    this.router.navigate(['/nola']);//Nola Dishes
    this.router.navigate(['/vegan']); //vegan

  }
}

