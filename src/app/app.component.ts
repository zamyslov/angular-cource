import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-4 col-5">
      <input class="form-control" [(ngModel)]="searchCar">
      <hr>
      <ul class="list-group">
        <li *ngFor="let car of cars | carFilter:searchCar:'description';let i = index"
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
}
