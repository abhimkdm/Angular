import { Component, OnInit } from '@angular/core';
import { ITodo } from './todo.interface';
import { TodoService } from './todo.service';

@Component({
  templateUrl: './todo.component.html'
})

export class TodoComponent implements OnInit {

  name: string;
  title: string = "Abhishek";
  TaskList : any;

  constructor(private _Myservice : TodoService){}

  ngOnInit(): void {
    this.TaskList = this._Myservice.Tasks;
  }


}
