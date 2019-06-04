import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangeDetectorModule } from './change-detector/change-detector.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChangeDetectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
