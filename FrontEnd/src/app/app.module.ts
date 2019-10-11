import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HeaderComponent } from './components/Client/header/header.component';
import { MenuComponent } from './components/Client/menu/menu.component';
import { BannerComponent } from './components/Client/banner/banner.component';
import { LastNewsComponent } from './components/Client/last-news/last-news.component';
import { PictureComponent } from './components/Client/picture/picture.component';
import { BottomComponent } from './components/Client/bottom/bottom.component';
import { FooterComponent } from './components/Client/footer/footer.component';
import { HomePageComponent } from './pages/Client/home-page/home-page.component';
import { RightComponent } from './components/client/right/right.component';
import { AnalyComponent } from './components/Client/analy/analy.component';
import { NewBoxComponent } from './components/Client/new-box/new-box.component';
import { NewsComponent } from './components/Client/news/news.component';
import { LatestPicturesComponent } from './components/Client/latest-pictures/latest-pictures.component';
import { ChatComponent } from './components/Client/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ScrollEventModule } from 'ngx-scroll-event';
@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    HeaderComponent,
    MenuComponent,
    BannerComponent,
    LastNewsComponent,
    PictureComponent,
    BottomComponent,
    FooterComponent,
    HomePageComponent,
    RightComponent,
    AnalyComponent,
    NewBoxComponent,
    NewsComponent,
    LatestPicturesComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ScrollEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
