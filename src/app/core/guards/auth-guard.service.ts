import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{

    if(!this.auth) {
      console.log('guard', this.auth)
      // this.router.navigate(['/auth/register']);
      return;
    }
    // this.router.navigate(['/admin/main']);
    return confirm('Confirm redirect');
}

  // canActivate(): boolean {
  //   if (!this.auth) {
  //     this.router.navigate(['/auth/login']);
  //     return false;
  //   }
  //   console.log('guard');
  //   this.router.navigate(['/main']);
  //   return true;
  // }
}
