import {Component} from '@angular/core';
import {CarsService} from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  cars = [];

  constructor(private carService: CarsService) {
  }

  loadCars() {
    this.carService.getCars().subscribe(response => {
      console.log(response);
    });
  }

}
