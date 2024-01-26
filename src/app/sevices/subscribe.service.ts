// subscribe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  private baseUrl = 'http://localhost:3000'; // Replace with your backend server URL

  constructor(private http: HttpClient) { }

  subscribe(email: string): Observable<any> {
    const url = `${this.baseUrl}/subscribe`;

    // Headers to set content type to JSON
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Request body
    const body = { email };

    return this.http.post(url, body, { headers });
  }
}
