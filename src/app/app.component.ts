import {Component} from '@angular/core';
import {CarsService} from './cars.service';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  cars: Cars[] = [];

  constructor(private carService: CarsService) {
  }

  loadCars() {
    this.carService.getCars().subscribe((response: Cars[]) => {
      this.cars = response;
    });
  }

}
