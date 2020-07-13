import {Component, OnInit} from '@angular/core';
import {TodoService} from "../todo.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ITodo} from "../ITodo";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  editForm: FormGroup;
  currentTodo: ITodo;
  submitted = false;

  constructor(private todoService: TodoService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.todoService.findById(id).subscribe(
      next => {
        this.currentTodo = next;
        this.editForm.patchValue(this.currentTodo);
      }, error => {
        console.log(error);
        this.currentTodo = null;
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.editForm.valid) {
      const {value} = this.editForm;
      const data = {
        ...this.currentTodo,
        ...value
      };
      this.todoService.update(data).subscribe(
        next => {
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
        }
      );
    }
  }

  get rfc() {
    return this.editForm.controls;
  }

  onReset(): void {
    this.submitted = false;
    this.editForm.reset();
  }

}
