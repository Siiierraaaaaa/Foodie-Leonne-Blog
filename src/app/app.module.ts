import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './outline/header/header.component';
import { HomeComponent } from './outline/home/home.component';
import { FamilyFavsComponent } from './pages/family-favs/family-favs.component';
import { FavsComponent } from './pages/favs/favs.component';
import { ResturantsComponent } from './pages/resturants/resturants.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { FooterComponent } from './outline/footer/footer.component';
import { NavComponent } from './outline/nav/nav.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './outline/menu/menu.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FamilyFavsComponent,
    FavsComponent,
    ResturantsComponent,
    DessertComponent,
    PopUpComponent,
    FooterComponent,
    NavComponent,
    AboutComponent,
    MenuComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
