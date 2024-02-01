import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://your-node-server-url'; // Update with your server URL

  constructor(private http: HttpClient) {}

  addPost(post: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/admin/posts`, post);
  }

  deletePost(postId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/admin/posts/${postId}`);
  }

  updatePost(postId: string, updatedPost: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/api/admin/posts/${postId}`, updatedPost);
  }

  deleteComment(commentId: string, postId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/admin/comments/${commentId}`, {
      body: { postId },
    });
  }
}
