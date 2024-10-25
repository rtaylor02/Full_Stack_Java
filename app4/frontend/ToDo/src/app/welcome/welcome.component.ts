import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {
  name = ''

  constructor(private route : ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }
}
