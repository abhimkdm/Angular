import { ITodo } from "./todo.interface";
import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {
  private count : number = 0;
  private TodoList : ITodo[] = [];
  private URL = '/src/webserver/api/Todos.json'; //"http://mysite/src/webserver/api/Todos.json"

  constructor(private _http : HttpClient){
  }


  //Add the data to TodoList
  addTodo(todo : ITodo){
    todo.TaskId = ++this.count;
    todo.Status = false;
    this.TodoList.push(todo);
  }

  //Get all todos
  getTodos(): ITodo[] {
    return this.TodoList;
  }

  //Get all Todos With Http
  get(): Observable<ITodo[]> {
    return this._http.get<ITodo[]>(this.URL);
  }

  //Get Task ID
  //Delete
  //TogleTaskStatus


  // Adding the Todo List
  // Displaying back to UI
  //CR

  //How HomeWork UD
}
