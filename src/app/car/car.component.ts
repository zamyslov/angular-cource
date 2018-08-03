import { Component, OnInit } from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService]
})
export class CarComponent implements OnInit {
  isCarVisible: boolean;
  header = 'My header';

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.isCarVisible = this.carService.getVisibility();
  }

}
