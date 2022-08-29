import { Component, ComponentRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalformComponent } from '../modalform/modalform.component';

export interface ITask {
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
  private viewRef!: ViewContainerRef;

  private componentRef!: ComponentRef<ModalformComponent>;

  showPopup(): void {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(ModalformComponent);
    this.componentRef.instance.onAddTask.subscribe(event => {
      console.log(event);
      const newTask: ITask  = {
        title: event.title,
        description: event.description,
        id: 4
      }
      this.currentTasks.push(newTask);
      this.componentRef.destroy()
    })
}

// к чему привязать эту функцию, если кнопка закрытия модалки внутри компонента модалки?
  closeThisPopup(): void {
    console.log('this clicked')
  this.viewRef.clear();
}


  currentTasks: ITask[] =[
    {title: 'task 1', description: 'description 1', id: 1},
    {title: 'task 2', description: 'description 2', id: 2},
    {title: 'task 3', description: 'description 3', id: 3}
  ]

  @Input()title: string = 'Idea';
  taskNumber: number = this.currentTasks.length;
  @Input()color: string = 'rgb(255, 0, 0)';

  //Отрендерить в каждом компоненте свои задачки

  // newTask: ITask  = {
  //   title: 'title',
  //   description: 'description',
  //   id: 4
  // }

  //  updateTaskList(): void {
  //   this.currentTasks.push(this.newTask)
  //   console.log(this.currentTasks, 'arr')
  //   this.taskNumber = this.currentTasks.length
  // }


  deleteThisTask(taskid: number): any {
    this.currentTasks = this.currentTasks.filter((item) => item.id !== taskid)
    this.taskNumber = this.currentTasks.length
  }

};
