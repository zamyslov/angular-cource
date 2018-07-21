import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-8 col-xs-offset-2">
      <h3>{{num}}</h3>
      <h3>{{num | appPow:3:'!'}}</h3>
    </div>
  `
})
export class AppComponent {
  num = 2;
}
