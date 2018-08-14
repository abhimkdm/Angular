import { ITodo } from "./todo.interface";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class TodoService {

  private count : number = 0;
  private TodoList : ITodo[] = [];

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

  //Get Task ID
  //Delete
  //TogleTaskStatus


  // Adding the Todo List
  // Displaying back to UI
  //CR

  //How HomeWork UD
}
