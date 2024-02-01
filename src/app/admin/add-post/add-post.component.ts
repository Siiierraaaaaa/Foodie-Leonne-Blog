import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  constructor(private adminService: AdminService) {}

  addPost(post: any) {
    this.adminService.addPost(post).subscribe(
      (response) => {
        console.log('Post added successfully:', response);
        // Handle success, e.g., navigate to post list
      },
      (error) => {
        console.error('Error adding post:', error);
        // Handle error
      }
    );
  }
}
