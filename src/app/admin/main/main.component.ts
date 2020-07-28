import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUserObservable().subscribe(user => console.log({user}))
  }

}
