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


  @Output() public deleteTask: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() public showEditPopup: EventEmitter<string> = new EventEmitter<string>();

 public completeTask(): void {
    console.log('complete button clicked!')
  }

};
