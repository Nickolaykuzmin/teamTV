import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {fromPromise} from "rxjs/internal-compatibility";
import UserCredential = firebase.auth.UserCredential;
import {Observable} from "rxjs";
import {User} from "firebase";
import {AuthSignUpErrorCode} from "../models/auth-error.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  authSignUpErrorCode = AuthSignUpErrorCode;

  constructor(public afAuth: AngularFireAuth) {
  }

  getErrorMessage(code: string): string {
    return this.authSignUpErrorCode[code];
  }

  getCurrentUserObservable() {
    return this.afAuth.authState.pipe(
      map(user => {
        return {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email
        }
      })
    );
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return fromPromise<UserCredential>(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  signUpWithEmailAndPassword(email: string, password: string): Observable<UserCredential> {
    return fromPromise<UserCredential>(this.afAuth.createUserWithEmailAndPassword(email, password));
  }
}
