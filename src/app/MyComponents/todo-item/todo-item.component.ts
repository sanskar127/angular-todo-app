import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  todo: Todo = new Todo;
  @Input()
  i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter;
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter;

  constructor() { }
  ngOnInit(): void {  }
  
  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    // console.log("onclick has been triggered")
  }

  onClickCheckBox(todo: Todo | undefined) {
    this.todoCheckBox.emit(todo)
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

