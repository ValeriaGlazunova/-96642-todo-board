import { ThisReceiver, TmplAstElement } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input()title: string = '';
  @Input()description: string = '';

  deleteTask(): void {
    console.log('delete button clicked!');
  }

  completeTask(): void {
    console.log('complete button clicked!')
  }

};
