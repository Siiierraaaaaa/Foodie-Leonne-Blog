import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../sevices/auth.service';
import { AdminService } from 'src/app/sevices/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false; // New property to track login errors

  constructor(private authService: AuthService, private adminService: AdminService, private router: Router) {}

  onSubmit() {
    // Simulate authentication (replace with your actual authentication logic)
    const isAuthenticated = this.authService.authenticateUser(this.username, this.password);

    if (isAuthenticated) {
      // Redirect to the admin page upon successful login
      this.router.navigate(['/admin']);
    } else {
      // Set loginError to true to display the error message
      this.loginError = true;
      console.error('Authentication failed');
    }
  }
}
