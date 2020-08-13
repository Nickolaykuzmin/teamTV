import {Component, OnInit} from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  authUser$: Observable<{ uid: string; displayName: string; email: string }>;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUserObservable().subscribe(res => console.log(res));
  }

  logOut() {
    this.userService.signOut();
  }
}
