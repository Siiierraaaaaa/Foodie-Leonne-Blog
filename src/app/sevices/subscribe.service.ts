import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  private apiUrl = 'http://localhost:3000'; // Backend endpoint

  constructor(private http: HttpClient) {}

  subscribe(email: string): Observable<any> {

    return this.http.post(`${this.apiUrl}/subscribe`, { email });
    // You can send a POST request to your backend or email service provider here
    // Example:
    // return this.http.post(`${this.apiUrl}/subscribe`, { email });
  }

  // subscribe(email: string) {
  //   return this.http.post(this.apiUrl, { email });
  // }
  
}