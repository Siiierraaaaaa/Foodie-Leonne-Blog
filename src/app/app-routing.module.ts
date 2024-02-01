import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './outline/header/header.component';
import { HomeComponent } from './outline/home/home.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { FavsComponent } from './pages/favs/favs.component';
import { ResturantsComponent } from './pages/resturants/resturants.component';
import { FooterComponent } from './outline/footer/footer.component';
import { NavComponent } from './outline/nav/nav.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './outline/menu/menu.component';
import { TiktokComponent } from './pages/tiktok/tiktok.component';
import { AppsComponent } from './pages/apps/apps.component';
import { VeganComponent } from './pages/vegan/vegan.component';
import { NolaComponent } from './pages/nola/nola.component';
import { QuickdinnerComponent } from './pages/quickdinner/quickdinner.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../app/admin/auth.guard';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { UpdatePostComponent } from './admin/update-post/update-post.component';
import { ManageCommentsComponent } from './admin/manage-comments/manage-comments.component';
import { DeletePostComponent } from './admin/delete-post/delete-post.component';
import { LoginComponent } from './admin/login/login.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent}, // Display HeaderComponent on the empty path
  { path: 'home', component: HomeComponent },
  { path: 'Pop-Up', component: PopUpComponent },
  { path: 'Dessert', component: DessertComponent },
  { path: 'Favs', component: FavsComponent },
  { path: 'Resturants', component: ResturantsComponent },
  { path: 'Footer', component: FooterComponent},
  { path: 'Nav', component: NavComponent},
  { path: 'About', component: AboutComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'tiktok', component: TiktokComponent},
  { path: 'apps', component: AppsComponent},
  { path: 'vegan', component: VeganComponent},
  { path: 'nola', component: NolaComponent},
  {path: 'quickdinner', component:QuickdinnerComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
      { path: 'add-post', component: AddPostComponent },
      { path: 'delete-post', component: DeletePostComponent },
      { path: 'update-post', component: UpdatePostComponent },
      { path: 'manage-comments', component: ManageCommentsComponent },
      { path: 'login', component: LoginComponent },
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
