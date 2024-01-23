import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './outline/header/header.component';
import { HomeComponent } from './outline/home/home.component';
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
import { AppsComponent } from './pages/apps/apps.component';
import { TiktokComponent } from './pages/tiktok/tiktok.component';
import { VeganComponent } from './pages/vegan/vegan.component';
import { NolaComponent } from './pages/nola/nola.component';
import { QuickdinnerComponent } from './pages/quickdinner/quickdinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QuickdinnerComponent,
    FavsComponent,
    ResturantsComponent,
    DessertComponent,
    PopUpComponent,
    FooterComponent,
    NavComponent,
    AboutComponent,
    MenuComponent,
    SubscribeComponent,
    AppsComponent,
    TiktokComponent,
    VeganComponent,
    NolaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
