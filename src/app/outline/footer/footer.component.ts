// footer.component.ts

import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { SubscribeService } from '../../sevices/subscribe.service'; // Adjust the path based on your project structure
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear(); subscribeForm: FormGroup;

  constructor(private fb: FormBuilder, private subscribeService: SubscribeService) {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  ngOnInit() {

  }

  onSubmit() {
    console.log('Form submitted!');
    if (this.subscribeForm.valid) {
      const email = this.subscribeForm.get('email')!.value;
      this.subscribeService.subscribe(email).subscribe(
        (response) => {
          // Handle successful subscription
          console.log('Subscription successful!', response);
        },
        (error) => {
          // Log the full error object for more details
          console.error('Subscription failed!', error);
        }
      );
    }
  }
}