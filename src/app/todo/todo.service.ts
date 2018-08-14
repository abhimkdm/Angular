import { ITodo } from "./todo.interface";
import { Injectable } from "../../../node_modules/@angular/core";

@Injectable()
export class TodoService {

  Tasks : ITodo[] = [
    {
      TaskId : 1, TaskName: "Some Task For ME", Status : true
    },
    {
      TaskId : 2, TaskName: "2nd Task For ME", Status : true
    },
    {
      TaskId : 3, TaskName: "3rd Task For ME", Status : true
    }
  ]

}
