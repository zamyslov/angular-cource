import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName = '';
  carYear = 2017;
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


  addCar() {
    this.cars.push(
      {
        name: this.carName,
        year: this.carYear
      }
    );
    this.carName = '';
    this.carYear = 2017;
  }

}
