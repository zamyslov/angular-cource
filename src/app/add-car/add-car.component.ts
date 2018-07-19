import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>();
  @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  addCar(carNameEl: HTMLInputElement) {
    this.carEmitter.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value
    });
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2017;
  }
}
