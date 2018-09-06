import { Pipe, PipeTransform } from "@angular/core";
import { ITodo } from "./todo.interface";

@Pipe({
  name: "filter"
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter((it : ITodo) => it.TaskName.toLowerCase().includes(searchText));
  }
}
