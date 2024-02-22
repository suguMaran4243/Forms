import { Component } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { AuthService } from './third/Services/auth.service';
import { CourseGuardService } from './third/Services/course-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
  constructor(private router:Router,private service:AuthService)
  {

  }
  login()
  {
    this.service.login();
    
  

  }
  logout()
  {

    this.service.logout();
  
  }
  
}
