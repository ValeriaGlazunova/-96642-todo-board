import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { ITask } from "../task/task.interface";

function dateRequired(): ValidatorFn {
  return ( control: AbstractControl ) => {
    const value: Date = control.value;
    const minDate: Date = new Date();
    const maxDate: Date = new Date('2025-12-31');
    console.log('msx', value)
    return value && new Date(value)>minDate && new Date(value)<maxDate ? null : {dateRequired: 'обязательное поле'};
  }
}

@Component ({
  selector: 'app-modalform',
  templateUrl: './modalform.component.html',
  styleUrls: ['./modalform.component.scss']
})

export class ModalformComponent implements OnInit {

  public form: FormGroup;
  modalid: number  = 1;
  @Input() task: ITask;
  @Input() public modalName: string;
  @Output() public onAddTask = new EventEmitter<any>();
  @Output() public onClosePopup = new EventEmitter<any>();
  @Output() public onEditTask = new EventEmitter<any>();


  public ngOnInit(): void {
    if (this.task) {
      this.modalName = 'Edit task'
      this.createForm(this.task.title, this.task.description, this.task.date)
    } else {
      this.modalName = 'Add task'
      this.createForm('', '', null)
    }
  }

  public addTask() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
    this.onAddTask.emit(this.form.value);
    }
  }

  public closePopup() {
     this.onClosePopup.emit();
  }

  public editTask() {
    this.form.markAllAsTouched();
    this.onEditTask.emit(this.form.value)
  }

  private createForm (taskName: string, taskDescription: string, taskDate: Date): void {
    this.form = new FormGroup({
      title: new FormControl(taskName, Validators.required),
      description: new FormControl(taskDescription, Validators.required),
      date: new FormControl(taskDate, dateRequired())
    })
  }
}
