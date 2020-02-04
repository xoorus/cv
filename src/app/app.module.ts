import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { MeComponent } from './components/me/me.component';
import { ExperiencesProComponent } from './components/pro/experiences-pro/experiences-pro.component';
import { ExperienceProDetailComponent } from './components/pro/experience-pro-detail/experience-pro-detail.component';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    LandingComponent,
    MeComponent,
    ExperiencesProComponent,
    ExperienceProDetailComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
