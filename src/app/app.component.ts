import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars = [
    {name: 'Mazda', isSold: false},
    {name: 'Ford', isSold: false},
    {name: 'BMW', isSold: false},
    {name: 'Lada', isSold: false}
  ];

  addCarToList(carName: string) {
    this.cars.push({
      name: carName, isSold: false
    });
  }
}
