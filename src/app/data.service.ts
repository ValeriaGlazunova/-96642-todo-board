import { Injectable } from "@angular/core";
import { Section } from "./section/section.interface";
import { ITask } from "./task/task.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn: ("root")})
export class DataService {
  private tasks: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]> ([
  ])

  private sections: Section[];
  private sectionss: BehaviorSubject<Section[]> = new BehaviorSubject<Section[]> (this.loadTasks())


  public get sections$(): Observable<Section[]> {
    return this.sectionss.asObservable()
  }

  public getTasks(tasks: ITask[], sectionID: number) {
   return tasks.filter(item => item.sectionID === sectionID)
  }

  public loadTasks(): Section[] {
    this.sections = [
      {color: '#de8a3c', title: 'Idea', id: 1, tasks: []},
      {color: '#de3c3c', title: 'To do', id: 2, tasks: []},
      {color: '#3c90de', title: 'In process', id: 3, tasks: []},
      {color: '#3cde4c', title: 'Done', id: 4, tasks: []},
    ]
    const tasks: ITask[] = JSON.parse(localStorage.getItem(
      "tasks"
    )) ? JSON.parse(localStorage.getItem(
      "tasks"
    )) : []
    this.tasks.next(tasks)
    this.sections.forEach((section) => section.tasks = this.getTasks(tasks, section.id))
    return this.sections
  }

  public addNewTask(task: ITask) {
    const currentTasks = this.tasks.value
    currentTasks.push(task)
    localStorage.setItem(
      'tasks', JSON.stringify(currentTasks)
    )
    this.sectionss.next(this.loadTasks())
  }

  public editTask(task: ITask) {
    const currentTasks = this.tasks.value
    // currentTasks.splice(task.id - 1, 1, task);
    const updatedTasks = currentTasks.map(item => item.id !== task.id ? item: task)
    localStorage.setItem(
      'tasks', JSON.stringify(updatedTasks)
    )
    this.sectionss.next(this.loadTasks())
  }

  public deleteTask(task: ITask) {

     const currentTasks = this.tasks.value;
     const filteredTasks = currentTasks.filter(item => item.id !== task.id);
     console.log('filtered', filteredTasks)
     localStorage.setItem('tasks', JSON.stringify(filteredTasks))
     this.sectionss.next(this.loadTasks())
  }
}
