import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { HeaderComponent } from '../header/header.component';
import { SectionComponent } from '../section/section.component';
import { TaskComponent } from '../task/task.component';
import { ModalformComponent } from '../modalform/modalform.component';

registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [
    HeaderComponent,
    SectionComponent,
    TaskComponent,
    ModalformComponent
  ],
  exports: [
    HeaderComponent,
    SectionComponent,
    TaskComponent,
    ModalformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class SectionModule { }
