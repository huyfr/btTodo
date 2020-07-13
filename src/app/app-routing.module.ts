import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from "./todo/todo.component";
import {CreateTodoComponent} from "./create-todo/create-todo.component";
import {EditTodoComponent} from "./edit-todo/edit-todo.component";
import {DeleteTodoComponent} from "./delete-todo/delete-todo.component";


const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'todo/show_create', component: CreateTodoComponent},
  {path: 'todo/edit/:id', component: EditTodoComponent},
  {path: 'todo/delete/:id', component: DeleteTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
