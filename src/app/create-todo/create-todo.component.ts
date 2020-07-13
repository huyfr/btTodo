import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  createForm: FormGroup;
  submitted = false;

  constructor(private todoService: TodoService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.createForm.valid) {
      const value = this.createForm.getRawValue();
      console.log(value);
      this.todoService.save(value).subscribe(error => {console.log(error)});
      this.router.navigateByUrl('/');
    }
  }

  onReset(): void {
    this.submitted = false
    this.createForm.reset();
  }

  get rfc() {
    return this.createForm.controls;
  }

}
