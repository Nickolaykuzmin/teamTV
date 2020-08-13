import {Component, OnInit} from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {Observable} from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  authUser$: Observable<{ uid: string; displayName: string; email: string }>;

  constructor(
    private userService: UserService,
    private router: Router,
    ) {
  }

  ngOnInit(): void {
    this.authUser$ = this.userService.getCurrentUserObservable();
  }

  logOut() {
    this.userService.signOut();
    return  this.router.navigate(['/login']);
  }
}
