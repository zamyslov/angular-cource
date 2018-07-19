import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  cars: { name: string, year: number }[] = [{
    name: 'Ford',
    year: 2017
  }, {
    name: 'Audi',
    year: 2015
  }, {
    name: 'BMW',
    year: 2014
  }, {
    name: 'Lada', year: 2017
  }];

  updateCarList(car: { name: string, year: number }) {
    this.cars.push(car);
  }

}
