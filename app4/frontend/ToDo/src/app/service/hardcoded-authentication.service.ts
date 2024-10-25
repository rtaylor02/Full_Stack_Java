import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username : string, password : string) {
    if (username === 'rtaylor02' && password === '123') {
      return true
    } else {
      return false
    }
  }
}
