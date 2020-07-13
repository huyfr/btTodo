import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {HttpClientModule} from "@angular/common/http";
import {CreateTodoComponent} from './create-todo/create-todo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoService} from "./todo.service";
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { DeleteTodoComponent } from './delete-todo/delete-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CreateTodoComponent,
    EditTodoComponent,
    DeleteTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
