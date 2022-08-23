import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionModule } from './section/section.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
