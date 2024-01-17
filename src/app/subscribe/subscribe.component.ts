import { Component } from '@angular/core';
import { SubscribeService } from '../sevices/subscribe.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent {
  email: string = '';

  constructor(private subscribeService: SubscribeService) {}

  subscribe() {
    this.subscribeService.subscribe(this.email);
    this.email = ''; // Clear the input after subscribing
  }
}