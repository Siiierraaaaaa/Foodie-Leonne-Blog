// layout.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
  <app-nav></app-nav>
  <app-header></app-header>
  <app-about></app-about>
  <app-home></app-home>
  <app-menu></app-menu>
    <div class="content">
      
    </div>
    <app-footer></app-footer>
  `,
  
  
  
})
export class LayoutComponent {}
