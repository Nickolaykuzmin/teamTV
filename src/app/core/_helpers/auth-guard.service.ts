import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    public auth: AuthService,
    public router: Router,
    private userService: UserService
    ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
     return this.userService.getCurrentUserObservable().pipe(map(permission => {
      debugger;
      console.log(permission.uid);
      if(permission.email) {
        this.router.navigate(['/admin/main']);
        return true;
      }
      return false;
     }));


  }
}
