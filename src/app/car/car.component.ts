import {Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnChanges {
  // carName = 'Ford';
  // carYear = 2015;
  @Input('carItem') car: { name: string, year: number };
  @ContentChild('carHeading') carHeading: ElementRef;

  constructor() {

  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
  }
}
