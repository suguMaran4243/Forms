import { Component } from '@angular/core';



@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent  {
 
  firstName:string;
  lastName:string;
  country:string;
  subject:string;

  canExit()
  {
    if(this.firstName || this.lastName || this.country ||this.subject)
    {
     return confirm('You have unsaved changes');
    }
    else
    {
      return true;
    }
  }
}
