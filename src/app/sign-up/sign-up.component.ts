import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../core/services/user.service";
import {AuthSignUpErrorCode} from "../core/models/auth-error.model";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpUserForm: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.signUpUserForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
    this.signUpUserForm.controls['email'].setValue('email@test.com')
    this.signUpUserForm.controls['password'].setValue('password')

  }


  onSubmitSignUpForm() {
    const {email, password} = this.signUpUserForm.getRawValue();
    this.userService.signUpWithEmailAndPassword(email, password)
      .pipe(takeUntil(this.destroy$))
      .subscribe(userCredential => {
      }, error => {
        const errorMessage = this.userService.getErrorMessage(error.code);
      })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
