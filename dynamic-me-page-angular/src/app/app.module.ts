import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import{ HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

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
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import{TokenCompletionService} from '../app/services/token-completion.service'


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
    ProfileCardComponent,
    PageNotFoundComponent,
    ImageUploadComponent,
    CreateProfileComponent,
    InputTextComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ 
    ProfileCardComponent, { 
    provide: HTTP_INTERCEPTORS, 
    useClass: TokenCompletionService, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
