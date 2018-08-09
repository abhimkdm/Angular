import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  NamesArray=['Abhishek', 'Pradeep', 'Aditya'];

  constructor(){
    this.scopeblock();
  }

  //Var Scope in Angular
  //Let Scope in Angular
  //Const Scope in Angular
  scopeblock = function () {
    // const sometext;

    // if(true){
    //  let  sometext ="Some Text 1";
    //  console.log(sometext);
    // }
    // sometext="Something NEw";
    // console.log(sometext);

  }

  ngOnInit() {
  }

}
