import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {
  }

  getCars() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset-utf8'
    });
    return this.http.get('http://localhost:3000/cars', {headers});
  }

  addCar(carName: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset-utf8'
    });
    const data = {
      name: carName,
      color: 'blue'
    };
    return this.http.post('http://localhost:3000/cars', data, {headers});
  }

  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`, car);
  }

  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car);
  }
}
