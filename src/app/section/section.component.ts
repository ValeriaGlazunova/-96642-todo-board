import { Component, Input } from '@angular/core';

export interface Task {
  title: string;
  description: string;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input()title: string = 'Idea';
  taskNumber: number = 1;
  @Input()color: string = 'rgb(255, 0, 0)';

  currentTasks: Task[] =[
    {title: 'task 1', description: 'description 1'},
    {title: 'task 2', description: 'description 2'},
    {title: 'task 3', description: 'description 3'}
  ]

  tasks: boolean = true;

};
