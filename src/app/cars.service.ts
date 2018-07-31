import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      id: 1,
      year: 2017,
      color: 'red'
    },
    {
      name: 'Audi',
      id: 2,
      year: 2010,
      color: 'blue'
    },
    {
      name: 'BMW',
      id: 3,
      year: 2005,
      color: 'yellow'
    },
    {
      name: 'Mercedes',
      id: 4,
      year: 2000,
      color: 'grey'
    }
  ]
}
