import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username : string = 'rtaylor02'
  password : string = ''
  errorMessage='Error! Contact support'
  invalidLogin = false

  constructor(private router : Router, private hardcodedAuthenticationService : HardcodedAuthenticationService) {}

  handleLogin() {
    console.log('username:' + this.username);
    console.log('password:' + this.password);

    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }


    // if (this.username === 'rtaylor02' && this.password === '123') {
    //   this.router.navigate(['welcome', this.username])
    //   this.invalidLogin = false
    // } else {
    //   this.invalidLogin = true
    // }
  }
}
