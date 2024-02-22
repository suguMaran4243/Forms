import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ErrorComponent } from './error/error.component';
import { RouterLink,RouterOutlet } from '@angular/router';
import { CoursesComponent } from './third/courses/courses.component';
import { BuyComponent } from './third/courses/buy/buy.component';
import { CoursesService } from './third/Services/courses.service';
import { CourseGuardService } from './third/Services/course-guard.service';
import { AuthService } from './third/Services/auth.service';
import { FourthComponent } from './fourth/fourth.component';
import { CanDeactivateGuardService } from './third/Services/canDeactivate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  {path:'',component:FirstComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:FirstComponent},
  {path:'About',component:SecondComponent},
  {path:'Services',component:ThirdComponent},
  {path:'Courses',component:CoursesComponent,canActivate:[CourseGuardService]},
  // {path:'Courses',component:CoursesComponent},
  {path:'Contact',component:FourthComponent,canDeactivate:[CanDeactivateGuardService]},
  {path:'Buy/:id',component:BuyComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ErrorComponent,
    CoursesComponent,
    BuyComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [CoursesService,CourseGuardService,AuthService,CanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
