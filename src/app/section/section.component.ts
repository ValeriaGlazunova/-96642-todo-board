import { Component, Input, Output } from '@angular/core';

export interface Task {
  title: string;
  description: string;
  id: number
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  currentTasks: Task[] =[
    {title: 'task 1', description: 'description 1', id: 1},
    {title: 'task 2', description: 'description 2', id: 2},
    {title: 'task 3', description: 'description 3', id: 3}
  ]
  @Input()title: string = 'Idea';
  taskNumber: number = this.currentTasks.length;
  @Input()color: string = 'rgb(255, 0, 0)';

  //Отрендерить в каждом компоненте свои задачки

  tasks: boolean = true;

  newTask: Task  = {
    title: 'title',
    description: 'description',
    id: 4
  }

  addTask(): void {
    this.currentTasks.push(this.newTask)
    console.log(this.currentTasks, 'arr')
    // дублирование кода?
    this.taskNumber = this.currentTasks.length
  }

  // как обратиться к конкретному элементу задачки и удалить его?
  deleteThisTask(taskid: number): any {
    console.log('taskid', taskid)
   // this.currentTasks = this.currentTasks.filter((item) => item !== task)
  }

};
