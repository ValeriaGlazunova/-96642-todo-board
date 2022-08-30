import { Component } from '@angular/core';
import { Section } from './section/section.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public sections: Section[] = [
    {color: '#de8a3c', title: 'Idea'},
    {color: '#de3c3c', title: 'To do'},
    {color: '#3c90de', title: 'In process'},
    {color: '#3cde4c', title: 'Done'},
  ]


}
