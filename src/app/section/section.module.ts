import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from '../header/header.component';
import { SectionComponent } from '../section/section.component';
import { TaskComponent } from '../task/task.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SectionComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class SectionModule { }
