import { Component, ComponentRef, Input, ViewChild, ViewContainerRef, Output } from '@angular/core';
import { Section } from './section.interface';
import { ModalformComponent } from '../modalform/modalform.component';
import { ITask } from '../task/task.interface';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  @Input() section: Section;

  @ViewChild('popup', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;

  private componentRef: ComponentRef<ModalformComponent>;

  showPopup(taskid = 0): void {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(ModalformComponent);
    this.componentRef.instance.task = this.currentTasks.find((task) => task.id === taskid )
    this.componentRef.instance.onEditTask.subscribe(event => {
      console.log(event, 'changes')
      const editedTask: ITask  = {
        title: event.title,
        description: event.description,
        id: taskid,
        date: new Date
      }
      this.currentTasks.splice(taskid-1, 1, editedTask)
      this.componentRef.destroy()
    })
    this.componentRef.instance.onAddTask.subscribe(event => {
      console.log(event);
      const newTask: ITask  = {
        title: event.title,
        description: event.description,
        id: this.taskNumber+1,
        date: new Date
      }
      this.currentTasks.push(newTask);
      this.taskNumber = this.currentTasks.length
      this.componentRef.destroy()
    })
      this.componentRef.instance.onClosePopup.subscribe(() => {
      this.componentRef.destroy()
    })
}

  public currentTasks: ITask[] =[
    {title: 'task 1', description: 'description 1', id: 1, date: new Date},
    {title: 'task 2', description: 'description 2', id: 2, date: new Date},
    {title: 'task 3', description: 'description 3', id: 3, date: new Date}
  ]

  public taskNumber: number = this.currentTasks.length;


 public deleteThisTask(taskid: number): any {
    this.currentTasks = this.currentTasks.filter((item) => item.id !== taskid)
    this.taskNumber = this.currentTasks.length
  }

};
