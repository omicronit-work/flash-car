import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { ExpertsComponent } from './components/experts/experts.component';
import { HomeVideoComponent } from './components/home-video/home-video.component';
import { FaqComponent } from './components/faq/faq.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { NewsComponent } from './components/news/news.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroSliderComponent,
    AboutUsComponent,
    ServicesComponent,
    OurTeamComponent,
    ExpertsComponent,
    HomeVideoComponent,
    FaqComponent,
    ReviewsComponent,
    NewsComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
