import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ITask } from "../section/section.component";

@Component ({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.css']
})

export class ModalformComponent implements OnInit {

  form: FormGroup | undefined;

  taskName: string = ''
  taskDescription: string = '';
  @Input() task: ITask | undefined;
  @Output() onAddTask = new EventEmitter<any>();


  public ngOnInit(): void {
    if (this.task) {
      this.createForm(this.task.title, this.task.description)
    } else {
      this.createForm('', '')
    }
  }

  // нужно повесить слушатель в компонент <add-modalform (onAddTask)="updateTaskList()" ></add-modalform>
  addTask() {
    this.onAddTask.emit(this.form.value);
  }

  private createForm (taskName: string, taskDescription: string): void {
    this.form = new FormGroup({
      title: new FormControl(taskName),
      description: new FormControl(taskDescription)
    })
  }
}
