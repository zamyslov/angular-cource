import {Component} from '@angular/core';
import 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-4 col-5">
      <h1>{{asyncTitle}}</h1>
      <input class="form-control" [(ngModel)]="searchCar">
      <button class="btn-primary" (click)="addCar()">Добавить</button>
      <hr>
      <ul class="list-group">
        <li *ngFor="let car of cars | carFilter:searchCar:'name';let i = index"
            class="list-group-item"><b>{{i + 1}}</b> {{car.name}} <i>{{car.description}}</i></li>
      </ul>
    </div>
  `
})
export class AppComponent {
  searchCar = '';
  cars = [
    {name: 'Mazda', description: 'car 1'},
    {name: 'Ford', description: 'car 2'},
    {name: 'BMW', description: 'car 3'},
    {name: 'Lada', description: 'car 4'}
  ];

  asyncTitle = Observable.of('Async').delay(3000);

  addCar() {
    this.cars.push({
      name: 'newCar', description: 'car'
    });
  }
}
