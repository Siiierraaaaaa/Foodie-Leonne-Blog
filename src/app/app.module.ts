import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { HeaderComponent } from './outline/header/header.component';
import { HomeComponent } from './outline/home/home.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { FavsComponent } from './pages/favs/favs.component';
import { ResturantsComponent } from './pages/resturants/resturants.component';
import { FooterComponent } from './outline/footer/footer.component';
import { NavComponent } from './outline/nav/nav.component';
import { AboutComponent } from './outline/about/about.component';
import { MenuComponent } from './outline/menu/menu.component';
import { TiktokComponent } from './pages/tiktok/tiktok.component';
import { AppsComponent } from './pages/apps/apps.component';
import { VeganComponent } from './pages/vegan/vegan.component';
import { NolaComponent } from './pages/nola/nola.component';
import { LayoutComponent } from './outline/layout/layout.component';
import { QuickdinnerComponent } from './pages/quickdinner/quickdinner.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'header', component: HeaderComponent }, 
      { path: 'Footer', component: FooterComponent },
      { path: 'Nav', component: NavComponent },
      { path: 'About', component: AboutComponent },
      { path: 'menu', component: MenuComponent },    
    ]
  },
  { path: 'Pop-Up', component: PopUpComponent },
  { path: 'Dessert', component: DessertComponent },
  { path: 'Favs', component: FavsComponent },
  { path: 'quickdinner', component: QuickdinnerComponent },
  { path: 'Resturants', component: ResturantsComponent },
  { path: 'tiktok', component: TiktokComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'vegan', component: VeganComponent },
  { path: 'nola', component: NolaComponent },
];

@NgModule({
  declarations: [
    // Components, directives, etc.
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PopUpComponent,
    DessertComponent,
    FavsComponent,
    ResturantsComponent,
    FooterComponent,
    NavComponent,
    AboutComponent,
    MenuComponent,
    TiktokComponent,
    AppsComponent,
    VeganComponent,
    NolaComponent,
    LayoutComponent,
    QuickdinnerComponent,
  ],
  imports: [
    
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    // Other modules...
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
