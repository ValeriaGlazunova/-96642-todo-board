import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Section } from './section/section.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public sections: Section[] = []

  constructor(public dataService: DataService) {

  }

  ngOnInit(): void {
  }
}
