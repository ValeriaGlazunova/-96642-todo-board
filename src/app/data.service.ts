import { Injectable } from "@angular/core";
import { Section } from "./section/section.interface";
import { ITask } from "./task/task.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn: ("root")})
export class DataService {
  private tasks: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]> ([
    {title: 'task 1', description: 'description 1', id: 1, date: new Date, sectionID: 1},
    {title: 'task 2', description: 'description 2', id: 2, date: new Date, sectionID: 2},
    {title: 'task 3', description: 'description 3', id: 3, date: new Date, sectionID: 3}
  ])
  // public tasks: ITask[] = [
  //    {title: 'task 1', description: 'description 1', id: 1, date: new Date, sectionID: 1},
  //     {title: 'task 2', description: 'description 2', id: 2, date: new Date, sectionID: 2},
  //      {title: 'task 3', description: 'description 3', id: 3, date: new Date, sectionID: 3}
  //   ]

  private sectionss: BehaviorSubject<Section[]> = new BehaviorSubject<Section[]> (this.loadTasks())
  public sections: Section[];

  public get sections$(): Observable<Section[]> {
    return this.sectionss.asObservable()
  }

  public getTasks(tasks, sectionID: number) {
   return tasks.value.filter(item => item.sectionID === sectionID)
  }

  public loadTasks(): Section[] {
    this.sections= [
      {color: '#de8a3c', title: 'Idea', id: 1, tasks: []},
      {color: '#de3c3c', title: 'To do', id: 2, tasks: []},
      {color: '#3c90de', title: 'In process', id: 3, tasks: []},
      {color: '#3cde4c', title: 'Done', id: 4, tasks: []},
    ]

    this.sections.forEach((section) => section.tasks = this.getTasks(this.tasks, section.id))
    return this.sections
  }

  public addNewTask(task) {
    console.log('service works')
    console.log(this.sectionss, 'sss')
    this.tasks.value.push(task)

  }
  public updateLocalStorage() {

  }
}
