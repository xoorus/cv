import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppRoutingModule } from './app-routing.module';
import { ScrollService } from './services/scroll.service';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxScrollspyModule } from '@uniprank/ngx-scrollspy';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { MeComponent } from './components/me/me.component';
import { ExperiencesProComponent } from './components/pro/experiences-pro/experiences-pro.component';
import { ExperienceProDetailComponent } from './components/pro/experience-pro-detail/experience-pro-detail.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { ContactComponent } from './components/contact/contact.component';

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
    SkillsComponent,
    HobbiesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScrollspyModule.forRoot(),
    ScrollToModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
