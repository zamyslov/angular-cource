import {Component, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit {

  cars: any;
  colors = ['white', 'red', 'blue', 'pink'];
  carName = '';
  appTitle;

  constructor(private carService: CarsService) {
  }


  ngOnInit(): void {
    this.appTitle = this.carService.getAppTitle().subscribe((response) => {this.appTitle = response.value; });
    console.log(this.appTitle);
  }

  loadCars() {
    this.cars = this.carService.getCars();
  }

  addCar() {
    this.carService.addCar(this.carName).subscribe((json: Cars) => {
      this.cars.push(json);
    });
    this.carName = '';
  }

  deleteCar(car: Cars) {
    this.carService.deleteCar(car).subscribe((data) => {
      this.cars = this.cars.filter(c => c.id !== car.id);
    });
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
