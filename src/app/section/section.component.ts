import { Component, ComponentRef, Input, ViewChild, ViewContainerRef, Output } from '@angular/core';
import { Section } from './section.interface';
import { ModalformComponent } from '../modalform/modalform.component';
import { ITask } from '../task/task.interface';
import { BehaviorSubject } from 'rxjs';


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

    this.componentRef.instance.task = this.currentTasks.value.find((task) => task.id === taskid )
    this.componentRef.instance.onEditTask.subscribe(event => {
      const tasks: ITask[] = this.currentTasks.value;
      console.log(event, 'changes')
      const editedTask: ITask  = {
        title: event.title,
        description: event.description,
        id: taskid,
        date: new Date
      }
      tasks.splice(taskid--, 1, editedTask)
      this.currentTasks.next(tasks);
      this.componentRef.destroy()
    })
    this.componentRef.instance.onAddTask.subscribe(event => {
      const tasks: ITask[] = this.currentTasks.value;
      console.log();
      const newTask: ITask  = {
        title: event.title,
        description: event.description,
        id: tasks.length+1,
        date: new Date
      }
      console.log('tasks', tasks, newTask)
      tasks.push(newTask);
      console.log('tasks1', tasks)
      this.currentTasks.next(tasks)
      this.componentRef.destroy()
    })
      this.componentRef.instance.onClosePopup.subscribe(() => {
      this.componentRef.destroy()
    })
}

  public currentTasks: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]> ([
    {title: 'task 1', description: 'description 1', id: 1, date: new Date},
    {title: 'task 2', description: 'description 2', id: 2, date: new Date},
    {title: 'task 3', description: 'description 3', id: 3, date: new Date}
  ])



 public deleteThisTask(taskid: number): any {
    this.currentTasks.next(this.currentTasks.value.filter((item) => item.id !== taskid));
  }

};
