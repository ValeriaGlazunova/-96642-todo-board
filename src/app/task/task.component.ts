import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input()title: string = '';
  @Input()description: string = '';
  @Input()taskDate: Date = new Date;
  @Input()id: number = 0;

  @Output() deleteTask: EventEmitter<any> = new EventEmitter<any>(null);

  completeTask(): void {
    console.log('complete button clicked!')
  }

};
