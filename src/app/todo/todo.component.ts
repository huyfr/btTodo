import { Component, OnInit } from '@angular/core';
import {ITodo} from "../ITodo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList: ITodo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.findAll().subscribe(
      next => {
        this.todoList = next;
      }, error => {
        console.log(error);
      }, () => {
        console.log('completed');
      });
  }
}
