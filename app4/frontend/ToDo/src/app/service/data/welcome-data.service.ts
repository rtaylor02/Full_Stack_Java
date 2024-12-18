import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message : string) {}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(public httpClient : HttpClient
  ) { }

  getWelcomeDataBean() {
    return this.httpClient.get<HelloWorldBean>("http://localhost:8080/hello-from-bean")
    // console.log("getWelcomeDataBean")
  }
}


