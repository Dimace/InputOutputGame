import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any = {
	str: 'str',
    obj: {
      prop1: 'prop1'
    },
    arr: []
  };
  title = 'InputOutputGame';
  text = `    data = {
      str: '${this.data.str}',
      obj: {
        prop1: ${this.data.obj.prop1}
        num: ${this.data.obj.num}
      },
      arr: [${this.data.arr}]
    }`;

    setObj1() {
      this.data.obj = {num: Math.random() * 100};
      this.text = `    data = {
      str: '${this.data.str}',
      obj: {
        prop1: ${this.data.obj.prop1}
        num: ${this.data.obj.num}
      },
      arr: [${this.data.arr}]
    }`;
	}
	
	pushArr() {
		this.data.arr.push('1');
    this.text = `    data = {
      str: '${this.data.str}',
      obj: {
        prop1: ${this.data.obj.prop1}
        num: ${this.data.obj.num}
      },
      arr: [${this.data.arr}]
    }`;
  }
  
  setStr() {
    this.data.str = 'str' + Math.random() * 100;
    this.text = `    data = {
      str: '${this.data.str}',
      obj: {
        prop1: ${this.data.obj.prop1}
        num: ${this.data.obj.num}
      },
      arr: [${this.data.arr}]
    }`;
  }

  setData() {
    this.data = {
      str: 'str2',
        obj: {
          prop1: 'prop2'
        },
        arr: []
      };
    this.text = `    data = {
      str: '${this.data.str}',
      obj: {
        prop1: ${this.data.obj.prop1}
        num: ${this.data.obj.num}
      },
      arr: [${this.data.arr}]
    }`;
  }

  pushAndCopy() {
    this.data.arr.push('1');
    const proxyArr = this.data.arr;
    const proxyObj = {
      str: this.data.str,
      obj: {
        prop1: this.data.prop1,
        num: this.data.obj.num
      },
      arr: proxyArr
    };
    this.data = proxyObj;
    this.text = `    data = {
      str: '${this.data.str}',
      obj: {
        prop1: ${this.data.obj.prop1}
        num: ${this.data.obj.num}
      },
      arr: [${this.data.arr}]
    }`;
  }
}
