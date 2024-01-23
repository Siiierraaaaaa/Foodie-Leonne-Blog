import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // animations: [
  //   trigger('moveBanner', [
  //     transition('* <=> *', [
  //       animate('22000ms', keyframes([
  //         style({ transform: 'translateX(100%)' }),
  //         style({ transform: 'translateX(-100%)' }),
  //         style({ transform: 'translateX(100%)' }),
  //         style({ transform: 'translateX(-100%)' }),
          
  //       ]))
  //     ]),
  //   ]),
  // ],
})
export class HeaderComponent implements OnInit {
  elements: any[] = []; // Replace 'any[]' with the actual type of your elements

  constructor() { }

  ngOnInit(): void {
    // Initialize or fetch your elements here and assign them to this.elements
    // For example:
    // this.elements = [{}, {}, ...];
  }
}
