import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ILogin} from './login.interface';
import { TodoService } from '../todo/todo.service';
import { ExamplesComponent } from '../examples/examples.component';

@Component({
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})

export class LoginComponent implements ILogin {

  Login() {
    throw new Error("Method not implemented.");
  }


  LoginModel : any = {
          UserName: '',
          Password: '',
  }

  UserName: string;
  Password: string;
  ErrorFlag: boolean;

  //private _route = Router; //cannot we define like primitive type?

  constructor(private _route : Router, private _myservice : TodoService)
  {
    let obj=new ExamplesComponent(_route);
    let obj1=new ExamplesComponent(_route);
  }

// Login(loginModel : NgForm) : void{
//   this._route.navigate(['/Todo']);
//   }


  Login1 = function(){

    if (this.UserName ==='Admin' && this.Password ==="Password")
    {
      console.log(this.UserName);
      console.log(this.Password);
      this.ErrorFlag=false;
      this._route.navigate(['/Todo']);
    }
    else{

      this.ErrorFlag=true;

    }


  }

}
