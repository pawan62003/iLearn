import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'instructor', component:InstructorListComponent},
  {path:"instructor/:id",component:InstructorDetailsComponent},
  {path:"add-instructor",component:InstructorFormComponent},
  // { path: '', component:RegistrationComponent },
  // { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InstructorListComponent,
    InstructorDetailsComponent,
    InstructorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
