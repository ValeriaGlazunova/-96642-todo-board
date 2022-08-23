import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input()title: string = 'Idea';
  taskNumber: number = 1;
  @Input()color: string = 'rgb(255, 0, 0)';
};
