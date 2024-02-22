import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  constructor(private route :Router,private curentActivate :ActivatedRoute)
  {

  }
navigateToHome()
{
  
  this.route.navigateByUrl('Home')
}
}
