import { Injectable } from "@angular/core";
import { Section } from "./section/section.interface";

@Injectable({providedIn: ("root")})
export class DataService {
  public sections: Section[] = this.loadTasks()
  public loadTasks(): Section[] {
    //получить из локального хранилища задачи, и по id секции распихать задачи по секциям
    return [
      {color: '#de8a3c', title: 'Idea', id: 1, tasks: []},
      {color: '#de3c3c', title: 'To do', id: 2, tasks: []},
      {color: '#3c90de', title: 'In process', id: 3, tasks: []},
      {color: '#3cde4c', title: 'Done', id: 4, tasks: []},
    ]
  }

  public addNewTask() {
    console.log('service works')
  }
  public updateLocalStorage() {

  }

}
