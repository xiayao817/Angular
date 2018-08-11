import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,     //BrowserAnimationsModule 추가
    MatTableModule               //MatTableModule 추가
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
