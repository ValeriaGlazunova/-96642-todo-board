import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../section/section.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input()
  task!: ITask;


  @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();
  @Output() showEditPopup: EventEmitter<number> = new EventEmitter<number>();

  completeTask(): void {
    console.log('complete button clicked!')
  }

};
