import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../section/section.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input()
  task!: Task;

  // @Input()title: string = '';
  // @Input()description: string = '';
  @Input()taskDate: Date = new Date;
  //@Input()id: number = 0;

  @Output() deleteTask: EventEmitter<number> = new EventEmitter<number>();

  completeTask(): void {
    console.log('complete button clicked!')
  }

};
