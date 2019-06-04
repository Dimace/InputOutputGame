import { Component, OnInit, Input } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
@Component({
  selector: 'app-change-detector',
  templateUrl: './change-detector.component.html',
  styleUrls: ['./change-detector.component.scss']
})
export class ChangeDetectorComponent implements OnInit {

  @Input() set data(data: any) {
	console.log('set');
	const code = `    data = {
        obj: {
          prop1: ${data.obj.prop1}
          num: ${data.obj.num}
        },
        arr: [${data.arr}]
      }`;
	this._arrayOfStates.push(code);
	this._num++;
	}
  _num = 0;
  _arrayOfStates = [];
  constructor() {   }

  ngOnInit() {
  }

}
