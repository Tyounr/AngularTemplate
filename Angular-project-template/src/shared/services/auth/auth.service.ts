import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn(): boolean {
    //TODO: add business logic to see if the current user is logged in or not
    return false;
  }
}
