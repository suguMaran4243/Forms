import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseGuardService implements CanActivate
{
    constructor(private authService:AuthService,private router :Router)
    {

    }
 canActivate(route :ActivatedRouteSnapshot,state :RouterStateSnapshot):boolean
 {
    if(this.authService.isAuthenticated())
    {
        return true;
    }
    else
    {
        this.router.navigate(['Home']);
        return false;
    }
 }
}