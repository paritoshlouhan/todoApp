import { Component, OnInit } from '@angular/core';
import {Todo} from '../todoItem/todo';
import {TodoDataService} from '../service/todo-data.service';


@Component({
  selector: 'todo-container',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'todos';

  todoTask: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) { 
    this.todoDataService = todoDataService;
  }
  
  addTodoItem() {
      this.todoDataService.addTodoItem(this.todoTask);
      this.todoTask = new Todo();
  }

  get todoCollection() {
    return this.todoDataService.getAllTodos();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  resolveTodo(event) {
    event.target.classList.toggle('checked');
  }

}
