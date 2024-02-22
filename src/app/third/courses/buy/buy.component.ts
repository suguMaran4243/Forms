import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap} from '@angular/router';
import { CoursesService } from '../../Services/courses.service';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  courseId:number;
  courseName;
  constructor( private route: ActivatedRoute,private service :CoursesService)
  {
  }
  ngOnInit():void
  {
    this.courseId=Number(this.route.snapshot.paramMap.get('id'));
    this.courseName=this.service.courses.find((x)=>x.id === Number(this.courseId));
   
  }
 

   
  }
   
  
  


