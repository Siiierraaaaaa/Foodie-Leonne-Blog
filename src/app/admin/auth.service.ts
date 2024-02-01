// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private authenticated = false;

  authenticateUser(username: string, password: string): boolean {
    // Replace with your actual authentication logic
    if (username === 'sierra' && password === 'leonne99') {
      this.authenticated = true;
      return true;
    }
    return false;
  }

  logout() {
    // Implement your logout logic here
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
