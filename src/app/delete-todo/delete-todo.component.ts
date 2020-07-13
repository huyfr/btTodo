import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ITodo} from "../ITodo";

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.scss']
})
export class DeleteTodoComponent implements OnInit {

  currentTodo: ITodo;
  submitted = false;

  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.todoService.findById(id).subscribe(
      next => {
        this.currentTodo = next;
      }, error => {
        console.log(error);
        this.currentTodo = null;
      }
    )
  }

  onDelete(): void {
    let verify = confirm("Bạn có chắc chắn muốn xóa?");
    if (verify) {
      this.todoService.delete(this.currentTodo.id).subscribe( todo => {todo.id !== this.currentTodo.id});
      this.submitted = true;
      this.router.navigateByUrl('/');
    } else {
      this.submitted = false;
    }
  }

  comeBack(): void {
    this.submitted = false;
    this.router.navigateByUrl('/');
  }
}
