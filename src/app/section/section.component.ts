import {
  Component,
  ComponentRef,
  Input,
  ViewChild,
  ViewContainerRef,
  Output,
  OnInit,
} from '@angular/core';
import { Section } from './section.interface';
import { ModalformComponent } from '../modalform/modalform.component';
import { ITask } from '../task/task.interface';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './../data.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input() section: Section;
  // public currentTasks: BehaviorSubject<ITask[]>;
  public currentTasks: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]> ([])

  @ViewChild('popup', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;

  private componentRef: ComponentRef<ModalformComponent>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.currentTasks.next(this.section.tasks);
  }

  showPopup(taskid = 0): void {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(ModalformComponent);

    this.componentRef.instance.task = this.currentTasks.value.find(
      (task) => task.id === taskid
    );
    this.componentRef.instance.onEditTask.subscribe((event) => {
      const tasks: ITask[] = this.currentTasks.value;
      console.log(event, 'changes');
      const editedTask: ITask = {
        title: event.title,
        description: event.description,
        id: taskid,
        date: new Date(),
        sectionID: this.section.id,
      };
      //tasks.splice(taskid - 1, 1, editedTask);
      this.dataService.editTask(editedTask)
      this.currentTasks.next(this.section.tasks);
      this.componentRef.destroy();
    });
    this.componentRef.instance.onAddTask.subscribe((event) => {
      const tasks: ITask[] = this.currentTasks.value;
      console.log();
      const newTask: ITask = {
        title: event.title,
        description: event.description,
        id: tasks.length + 1,
        date: new Date(),
        sectionID: this.section.id,
      };
      //tasks.push(newTask);
      this.dataService.addNewTask(newTask)
      this.currentTasks.next(this.section.tasks);
      this.componentRef.destroy();
    });
    this.componentRef.instance.onClosePopup.subscribe(() => {
      this.componentRef.destroy();
    });
  }

  public deleteThisTask(taskid: number): any {
    this.dataService.deleteTask(taskid)
    // this.currentTasks.next(
    //   //this.currentTasks.value.filter((item) => item.id !== taskid)
    //   this.section.tasks
    //   );
  }

}

