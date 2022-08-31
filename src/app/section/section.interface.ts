import { ITask } from "../task/task.interface";

export interface Section {
  color: string,
  title: string,
  id: number,
  tasks: ITask[]
}
