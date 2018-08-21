import { Component, OnInit } from '@angular/core';
import { ITodo } from './todo.interface';
import { TodoService } from './todo.service';
import { TodoModel } from './todo.model';
import { map } from '../../../node_modules/rxjs/operators';

@Component({
  templateUrl: './todo.component.html'
})

export class TodoComponent implements OnInit {

  name: string;
  title: string = "Abhishek";
  TaskList : any;
  ObjTodoModel : TodoModel;

  constructor(private _Myservice : TodoService){
    this.ObjTodoModel= new TodoModel();
  }

  ngOnInit(): void {
   // this.TaskList = this._Myservice.getTodos();

    this._Myservice.getAllTodos()
      .subscribe(
        data =>this.TaskList=data
      );
  }

  //Add Todo
  addTodo(todo : TodoModel){
    this._Myservice.addTodo(todo);
    this.ObjTodoModel=new TodoModel();
  }

}
