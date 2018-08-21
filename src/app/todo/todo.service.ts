import { ITodo } from "./todo.interface";
import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, range} from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';


@Injectable()
export class TodoService {
  private count : number = 0;
  private TodoList : ITodo[] = [];
  private URL = '/src/webserver/api/Todos.json'; //"http://mysite/src/webserver/api/Todos.json"

  constructor(private _http : HttpClient){

    //Obervables
    //this.MyObervables();

  }



  //Get all Todos With Http
  getAllTodos(): Observable<ITodo[]> {
    return this._http.get<ITodo[]>(this.URL)
                    .pipe(
                      catchError(this.handleMyError)
                    );
  }

  handleMyError(er : HttpErrorResponse){
    console.log(er.message);
    return Observable.throw(er);
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


   // private MyObervables() {
  //   const remoteData$: Observable<number> = range(0, 10);
  //   let responseData = remoteData$.pipe(map(d => this.mult(d)), filter(d => this.filtdata(d)));
  //   responseData.subscribe(data => console.log(data));
  // }

  // private filtdata(d: any): boolean {
  //   return d % 3 == 0;
  // }


  // private mult(d: number): number {
  //   return d * 10;
  // }


  //WebPack
  //Generic
  //Arrow Functions


  //Get Task ID
  //Delete
  //TogleTaskStatus


  // Adding the Todo List
  // Displaying back to UI
  //CR

  //How HomeWork UD
}
