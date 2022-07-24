import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import{ HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { DescriptionSectionComponent } from './components/description-section/description-section.component';
import { SectionComponent } from './components/section/section.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { ProfileHubComponent } from './components/profile-hub/profile-hub.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienceItemComponent,
    ProjectItemComponent,
    DescriptionSectionComponent,
    SectionComponent,
    ProfileComponent,
    SkillItemComponent,
    ProfileHubComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
