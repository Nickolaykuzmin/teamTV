import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {takeUntil} from "rxjs/operators";
import {UserService} from "../core/services/user.service";
import {Subject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  signInUserForm: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signInUserForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmitSignInForm() {
    const {email, password} = this.signInUserForm.getRawValue();
    this.userService.signInWithEmailAndPassword(email, password)
      .pipe(takeUntil(this.destroy$))
      .subscribe(userCredential => {
        console.log({userCredential});
        return this.router.navigate(['/admin', 'main']);
      }, error => {
        const errorMessage = this.userService.getErrorMessage(error.code);
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
