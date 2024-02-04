import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddPostComponent } from './add-post/add-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { ManageCommentsComponent } from './manage-comments/manage-comments.component';
import { LogoutComponent } from './logout-button/logout-button.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../sevices/recipes.service';
import { AdminService } from '../sevices/admin.service';


const adminRoutes: Routes = [
  { path: 'add-post', component: AddPostComponent },
  { path: 'delete-post', component: DeletePostComponent },
  { path: 'update-post', component: UpdatePostComponent },
  { path: 'manage-comments', component: ManageCommentsComponent },
  // ... other admin routes
];

@NgModule({
  declarations: [
    AddPostComponent,
    DeletePostComponent,
    UpdatePostComponent,
    ManageCommentsComponent,
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminRoutes),
   
  ],
  providers: [
    RecipeService, AdminService
  ]

})
export class AdminModule { }
