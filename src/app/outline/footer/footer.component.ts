// footer.component.ts

import { Component } from '@angular/core';
import { SubscribeService } from '../../sevices/subscribe.service'; // Adjust the path based on your project structure

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

  email: string = ''; // Add this line to initialize the email variable

  constructor(private subscribeService: SubscribeService) {}

  subscribe(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Add any additional logic here if needed
    // For now, just call the subscribe method from the service
    this.subscribeService.subscribe(this.email);
  }
}
