import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FourthComponent } from "src/app/fourth/fourth.component";

// export interface IDeactivateComponent
// {
//     canExit:()=>Observable<boolean>|Promise<boolean>|boolean;
// }
export class CanDeactivateGuardService implements CanDeactivate<FourthComponent>{
    canDeactivate(component:FourthComponent,currentRoute:ActivatedRouteSnapshot,
        currentState:RouterStateSnapshot,nextState:RouterStateSnapshot)
    {
        // alert('You are not allowed to move away')
         return component.canExit();
    }
}