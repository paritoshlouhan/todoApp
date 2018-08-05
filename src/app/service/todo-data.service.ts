import { Injectable } from '@angular/core';
import {Todo} from '../todoItem/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor() { }

  //Last iterated
  lastTodo: number = 0;

  //List to maintain todos
  todos: Todo[] = [];

  //Adding todo to list
  addTodoItem(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastTodo;
      this.todos.push(todo);
    }    
  }

  // Deleting todo by id
  deleteTodoById(id: number) {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
  }

  //Get all todo list
  getAllTodos(): Todo[] {
    return this.todos;
  }

  //Get todo by Id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }
}
