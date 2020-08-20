import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authUser$: Observable<{ uid: string; displayName: string; email: string }>;

  constructor(  private userService: UserService,
    private router: Router,) { }

  ngOnInit():void {
    this.authUser$ = this.userService.getCurrentUserObservable();
  }


  logOut() {
    this.userService.signOut();
    return  this.router.navigate(['/login']);
  }

}
