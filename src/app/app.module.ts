import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterPipe } from './todo/filter.pipe';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ExamplesComponent } from './examples/examples.component';
import { TodoService } from './todo/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { ReversePipe } from './Pipes/reverse.pipe';
import { ColorDirective } from './Shared/color.directive';
import { StatusComponent } from './Shared/status/status.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TodoComponent,
    LoginComponent,
    NavbarComponent,
    ExamplesComponent,
    ReversePipe,
    ColorDirective,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '',  redirectTo:'Login', pathMatch:'full' }, //localhost:5000/Login
      { path: 'Login', component: LoginComponent },
      { path: 'Todo', component: TodoComponent },
      { path: 'Examples', component: ExamplesComponent }
    ])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
