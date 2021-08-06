import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactInfoComponent } from './feature/contact-info/contact-info.component';
import { WorkExperienceComponent } from './feature/work-experience/work-experience.component';
import { EducationComponent } from './feature/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    WorkExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
