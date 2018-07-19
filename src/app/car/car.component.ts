import {Component, ContentChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  // carName = 'Ford';
  // carYear = 2015;
  @Input('carItem') car: { name: string, year: number };
  @ContentChild('carHeading') carHeading: ElementRef;

  ngAfterViewInit() {
    console.log(this.carHeading);
  }
}
