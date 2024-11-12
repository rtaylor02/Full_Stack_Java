import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {
  name = ''
  welcomeMessageFromService : string = ''

  constructor(private route : ActivatedRoute, public service : WelcomeDataService) {}

  ngOnInit() {
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    // this.service.getWelcomeDataBean().subscribe(response => console.log(response.message)) // Async call
    this.service.getWelcomeDataBean().subscribe(response => this.handleSuccessfulResponse(response), error => this.handleErrorResponse()) // Async call
    console.log("Success!") // This will get executed before async call returns with response
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    console.log("Inside handleSuccessfulResponse")
    console.log(response.message)
    this.welcomeMessageFromService = response.message
    console.log("welcomeMessageFromService: " + this.welcomeMessageFromService)
  }
}
