import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  private apiUrl = 'http://localhost:3000/subscribe'; // Backend endpoint

  constructor(private http: HttpClient) {}

  subscribe(email: string) {
    return this.http.post(this.apiUrl, { email });
  }
}