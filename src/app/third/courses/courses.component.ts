import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../Services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent  {
  courseId;
  courseName;
  constructor(public service:CoursesService,private route:Router)
  {
          
  }
  id;
  goToBuy(id :number)
  {
    
  this.route.navigate(['/Buy',id]);
  
  }
 
  

  

}
