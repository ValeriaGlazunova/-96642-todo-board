import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from './task.interface';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input()
  task: ITask;


  @Output() public deleteTask: EventEmitter<number> = new EventEmitter<number>();
  @Output() public showEditPopup: EventEmitter<number> = new EventEmitter<number>();

 public completeTask(): void {
    console.log('complete button clicked!')
  }

};
