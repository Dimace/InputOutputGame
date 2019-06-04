import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorComponent } from './change-detector.component';

@NgModule({
  declarations: [ChangeDetectorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ChangeDetectorComponent
  ]
})
export class ChangeDetectorModule { }
