import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ITask } from "../task/task.interface";

@Component ({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})

export class ModalformComponent implements OnInit {

  form: FormGroup;
  taskName: string = ''
  taskDescription: string = '';
  modalid: number  = 1;
  @Input() task: ITask;
  @Input() modalName: string;
  @Output() onAddTask = new EventEmitter<any>();
  @Output() onClosePopup = new EventEmitter<any>();


  public ngOnInit(): void {
    if (this.task) {
      this.modalName = 'Edit task'
      this.createForm(this.task.title, this.task.description)
    } else {
      this.modalName = 'Add task'
      this.createForm('', '')
    }
  }

  public addTask() {
    this.onAddTask.emit(this.form.value);
  }

  public closePopup() {
     this.onClosePopup.emit();
  }

  private createForm (taskName: string, taskDescription: string): void {
    this.form = new FormGroup({
      title: new FormControl(taskName),
      description: new FormControl(taskDescription)
    })
  }
}
