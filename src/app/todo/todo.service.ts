import { ITodo } from "./todo.interface";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class TodoService {
  private count: number = 0;
  private TodoList: ITodo[] = [];
  private URL = "/src/webserver/api/Todos.json"; //"http://mysite/src/webserver/api/Todos.json"

  constructor(private _http: HttpClient) {}


  //Get all Todos With Http
  getAllTodos(): Observable<ITodo[]> {
   return this._http.get<ITodo[]>(this.URL)
   .pipe(
     map(data=> this.CloneReference(data)),
     catchError(this.handleMyError)
   );
  }

  CloneReference(data : any) : any{
    this.TodoList=data;
    return data;
  }

  handleMyError(er: HttpErrorResponse) {
    return Observable.throw(er.message);
  }

  //Add the data to TodoList
  addTodo(todo: ITodo) {
    this.count = this.TodoList.length;
    todo.TaskId = ++this.count;
    todo.Status = false;
    this.TodoList.push(todo);
  }

  //Get all todos
  getTodos(): ITodo[] {
    return this.TodoList;
  }

}
