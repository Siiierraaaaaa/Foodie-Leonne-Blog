import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Simulate authentication (replace with your actual authentication logic)
    const isAuthenticated = this.authService.authenticateUser(this.username, this.password);

    if (isAuthenticated) {
      // Redirect to the admin page upon successful login
      this.router.navigate(['/admin']);
    } else {
      // Display an error message or handle the failed login scenario
      console.error('Authentication failed');
    }
  }
}
