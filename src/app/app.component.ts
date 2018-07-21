import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-8 col-xs-offset-2">
      <!--<h2> {{name}}</h2>-->
      <!--<h2> {{name | lowercase }}</h2>-->
      <!--<h2> {{name | uppercase }}</h2>-->
      <!--<h2> {{name | slice:0:3 }}</h2>-->
      <!--<hr>-->
      <!--<h3>{{ pi }}</h3>-->
      <!--<h3>{{ pi | number }}</h3>-->
      <!--<h3>{{ pi | number:'1.3-4' }}</h3>-->
      <!--<h3>{{ pi | number:'2.1-1' }}</h3>-->
      <!--<hr>-->
      <!--<h3>{{ money | currency:'USD':false}}</h3>-->
      <!--<hr>-->
      <!--<h3>{{ date }}</h3>-->
      <!--<h3>{{ date | date}}</h3>-->
      <!--<h3>{{ date | date:'shortDate'}}</h3>-->
      <!--<h3>{{ date | date:'shortTime'}}</h3>-->
      <!--<hr>-->
      <h3>{{amount}}</h3>
      <h3>{{amount | percent}}</h3>
      <hr>
      <h3>{{ object }}</h3>
      <h3>{{ object | json}}</h3>
      <h3><pre>{{ object | json}}</pre></h3>
    </div>
  `
})
export class AppComponent {
  name = 'WebForMySelf';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested: {
      xyz: 3,
      numbers: [1, 2, 3]
    }
  };
}
