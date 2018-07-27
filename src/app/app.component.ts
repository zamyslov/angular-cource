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
  colors = ['white', 'red', 'blue', 'pink'];
  carName = '';

  constructor(private carService: CarsService) {
  }

  loadCars() {
    this.carService.getCars().subscribe((response: Cars[]) => {
      this.cars = response;
    });
  }

  addCar() {
    this.carService.addCar(this.carName).subscribe((json: Cars) => {
      this.cars.push(json);
    });
    this.carName = '';
  }

  getRandColor() {
    const color = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[color];
  }

  setNewColor(car: Cars) {
    this.carService.changeColor(car, this.getRandColor()).subscribe(data => {
      console.log(data);
    });
  }
}
