import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      year: 2017,
      color: 'red',
      id: 1
    },
    {
      name: 'Audi',
      year: 2010,
      color: 'blue',
      id: 2
    },
    {
      name: 'BMW',
      year: 2016,
      color: 'white',
      id: 3
    },
    {
      name: 'Mercedes',
      year: 2014,
      color: 'yellow',
      id: 4
    }
  ];
}
