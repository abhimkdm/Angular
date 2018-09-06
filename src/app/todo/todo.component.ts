import { Component, OnInit } from "@angular/core";
import { ITodo } from "./todo.interface";
import { TodoService } from "./todo.service";
import { TodoModel } from "./todo.model";
import { map } from "rxjs/operators";
import { ExamplesComponent } from "../examples/examples.component";

@Component({
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  name: string;
  title: string = "Abhishek";
  TaskList: any;
  ObjTodoModel: TodoModel;
  errorMessage : string;

  constructor(private todoService: TodoService) {
    this.ObjTodoModel = new TodoModel();

  }

  ngOnInit(): void {
    this.getAllTodo();
  }

  getAllTodo() {
    this.todoService.getAllTodos().subscribe(
      data => this.TaskList = data,
      err => this.errorMessage = "Resource Not Found"
    )
  }

  //Add Todo
  addTodo(todo: TodoModel) {
    this.todoService.addTodo(todo);
    this.ObjTodoModel = new TodoModel();
  }


  ClickEventForParent(message : boolean){
    console.log(message);
  }

}
