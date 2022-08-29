import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ITask } from "../section/section.component";

export interface Modal {
  title: string;
}

@Component ({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.css']
})

export class ModalformComponent implements OnInit {

  form: FormGroup;


  taskName: string = ''
  taskDescription: string = '';
  modalid: number  = 1;
  @Input() task: ITask;
  @Input() modal: Modal;
  @Output() onAddTask = new EventEmitter<any>();
  @Output() onClosePopup = new EventEmitter<number>();


  public ngOnInit(): void {
    if (this.task) {
      this.createForm(this.task.title, this.task.description)
    } else {
      this.createForm('', '')
    }
  }

  addTask() {
    this.onAddTask.emit(this.form.value);
  }

  closePopup() {
     this.onClosePopup.emit();
  }

  private createForm (taskName: string, taskDescription: string): void {
    this.form = new FormGroup({
      title: new FormControl(taskName),
      description: new FormControl(taskDescription)
    })
  }
}
