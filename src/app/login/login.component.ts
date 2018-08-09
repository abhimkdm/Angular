import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})

export class LoginComponent {

  UserName: string;
  Password: string;
  ErrorFlag: boolean;

  //private _route = Router; //cannot we define like primitive type?

  constructor(private _route : Router)
  {

  }

  Login = function(){

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
