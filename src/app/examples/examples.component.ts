import {
  Component,
  OnInit,
  OnDestroy,
  AfterContentInit,
  AfterViewInit
} from "@angular/core";
import { Observable, range, interval, using } from "rxjs";
import { map, filter } from "rxjs/operators";
import { Router } from "@angular/router";
import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-examples",
  templateUrl: "./examples.component.html",
  styleUrls: ["./examples.component.css"]
})
export class ExamplesComponent
  implements OnInit, OnDestroy, AfterContentInit, AfterViewInit {
  // NamesArray=['Abhishek', 'Pradeep', 'Aditya'];

  constructor(private _route: Router) {
    //this.scopeblock();
    //Obervables
    //this.MyObervables();
    console.log("I'm from constructor");
  }

  ngAfterViewInit(): void {
    console.log("I'm from ngAfterViewInit");
  }
  ngAfterContentInit(): void {
    console.log("I'm from ngAfterContentInit");
  }
  ngOnDestroy(): void {
    console.log("I'm from ngOnDestroy");
  }
  ngOnInit(): void {
    console.log("I'm from ngOnInit");
  }

  RedirectMe() {
    this._route.navigate(["/Login"]);
  }

  // private MyObervables() {

  //   const remoteData$: Observable<number> = interval(1000)

  //  let responseData = remoteData$.pipe(
  //     map(d => this.mult(d)),
  //     filter(d => this.filtdata(d))
  //   );

  //  responseData.subscribe(data => console.log(data));
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

  // //Var Scope in Angular
  // //Let Scope in Angular
  // //Const Scope in Angular
  // scopeblock = function () {
  //   // const sometext;

  //   // if(true){
  //   //  let  sometext ="Some Text 1";
  //   //  console.log(sometext);
  //   // }
  //   // sometext="Something NEw";
  //   // console.log(sometext);

  // }
}

// // Toggle todo complete
// toggleTodoComplete(todo: ITodo) {
//   let updatedTodo = this.updateTodoById(todo.TaskId, {
//     status: !todo.Status
//   });
//   return updatedTodo;
// }

// // Simulate PUT /todos/:TaskId
// updateTodoById(TaskId: number, values: Object = {}): ITodo {
//   let todo = this.getTodoById(TaskId);
//   if (!todo) {
//     return null;
//   }
//   Object.assign(todo, values);
//   return todo;
// }

// // Simulate GET /todos/:id
// getTodoById(TaskId: number): ITodo {
//   return this.TodoList.filter(todo => todo.TaskId === TaskId).pop();
// }

// // Simulate DELETE /todos/:id
// deleteTodoById(TaskId: number): TodoService {
//   this.TodoList = this.TodoList.filter(todo => todo.TaskId !== TaskId);
//   return this;
// }

// deleteCompeletedTodo() {
//   this.TodoList = this.TodoList.filter(todo => todo.Status != true);
// }
