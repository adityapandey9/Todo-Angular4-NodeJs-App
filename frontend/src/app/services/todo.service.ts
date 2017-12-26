import {Injectable} from '@angular/core';
import { List } from '../models/list';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TodoDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: List[] = [];

  constructor(public api: AuthService) {
  }

  // Simulate POST /todos
  addTodo(todo: List, token: string): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    this.api.settodoList(token, todo);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: List, token: string): List {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    this.api.archivetodoList(token, todo);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): List[] {
    return this.todos;
  }

  setAllTodos(todos: List[]){
      this.todos = todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): List {
    return this.todos
      .filter(todo => todo.id === id).pop();
  }

}