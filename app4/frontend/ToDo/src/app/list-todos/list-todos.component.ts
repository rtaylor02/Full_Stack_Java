import { Component } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {
  // todos = [{id: 1, description: 'Master Full Stack Java Development'}, {id: 2, description: 'Master Java Multi-Threading and Concurrency'}, {id: 3, description: 'Master Java Optimisation'}]
  // todo = {id: 1, description: 'Master Full Stack Java Development'}
  todos = [
    new Todo(1, 'Master Full Stack Java Development', false, new Date),
    new Todo(2, 'Master Java Multi-Threading and Concurrency', false, new Date),
    new Todo(3, 'Master Java Optimisation', false, new Date),
  ]
}

export class Todo {
  constructor(
    public id : number,
    public description : string,
    public done : boolean,
    public targetDate : Date
  ) {}
}
