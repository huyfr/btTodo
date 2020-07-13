import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITodo} from "./ITodo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly API_FIND_ALL = 'http://localhost:8888/todo/overview';
  private readonly API_FIND_BY_ID = 'http://localhost:8888/todo';
  private readonly API_SAVE = 'http://localhost:8888/todo/create';
  private readonly API_UPDATE = 'http://localhost:8888/todo/edit';
  private readonly API_DELETE = 'http://localhost:8888/delete/todo';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(this.API_FIND_ALL);
  }

  findById(id: number): Observable<ITodo> {
    return this.httpClient.get<ITodo>(`${this.API_FIND_BY_ID}/${id}`);
  }

  save(todo: ITodo): Observable<ITodo> {
    return this.httpClient.post<ITodo>(this.API_SAVE, todo);
  }

  delete(id: number): Observable<ITodo> {
    return this.httpClient.delete<ITodo>(`${this.API_DELETE}/${id}`);
  }

  update(todo: ITodo): Observable<ITodo> {
    return this.httpClient.put<ITodo>(`${this.API_UPDATE}/${todo.id}`, todo);
  }
}
