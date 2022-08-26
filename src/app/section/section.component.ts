import { Component, ComponentRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalformComponent } from '../modalform/modalform.component';

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

  @ViewChild('popup', { read: ViewContainerRef })
  private viewRef: ViewContainerRef|undefined;

  private componentRef: ComponentRef<ModalformComponent> | undefined;

  showPopup(): void {
    if(this.viewRef && this.componentRef !== undefined) {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(ModalformComponent);
  }
}

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
    this.taskNumber = this.currentTasks.length
  }


  deleteThisTask(taskid: number): any {
    console.log('taskid', taskid)
    this.currentTasks = this.currentTasks.filter((item) => item.id !== taskid)
    this.taskNumber = this.currentTasks.length
  }

};
