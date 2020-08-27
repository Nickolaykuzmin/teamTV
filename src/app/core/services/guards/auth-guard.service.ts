import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private userService: UserService
    ) {}
  canActivate() : Observable<boolean> | boolean{
     return this.userService.getCurrentUserObservable().pipe(map(permission => {

      if(!permission) {
         return true;
      }
      this.router.navigate(['admin']);
      return false;
     }));

  }
}
