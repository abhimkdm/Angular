import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ExamplesComponent } from './examples/examples.component';
import { TodoService } from './todo/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    NavbarComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'Login', pathMatch:'full' }, //localhost:5000/Login
      { path: 'Login', component: LoginComponent },
      { path: 'Todo', component: TodoComponent }
    ])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
