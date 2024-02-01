import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post/add-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { ManageCommentsComponent } from './manage-comments/manage-comments.component';
import { AdminComponent } from './admin.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AddPostComponent,
    DeletePostComponent,
    UpdatePostComponent,
    ManageCommentsComponent,
    AdminComponent,
    LogoutButtonComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
