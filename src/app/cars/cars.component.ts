import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus = '';
  inputText = 'Default';

  addCar() {
    this.addCarStatus = 'Машина добавлена';
  }

  onKeyUp(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }

}
