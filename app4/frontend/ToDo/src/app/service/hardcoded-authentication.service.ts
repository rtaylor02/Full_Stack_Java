import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  authenticatedUser = 'authenticatedUser'

  constructor() { }

  authenticate(username : string, password : string) {
    console.log('before: ' + this.isUserLoggedIn())
    if (username === 'rtaylor02' && password === '123') {
      sessionStorage.setItem(this.authenticatedUser, username)
      console.log('after: ' + this.isUserLoggedIn())
      return true
    } else {
      return false
    }
  }

  isUserLoggedIn() {
    let user  = sessionStorage.getItem(this.authenticatedUser)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(this.authenticatedUser);
  }
}
