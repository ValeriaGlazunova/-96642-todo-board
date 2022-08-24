import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  exports: [
    HeaderComponent,
    SectionComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})
export class SectionModule { }
