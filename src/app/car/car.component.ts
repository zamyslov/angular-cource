import {
  AfterContentChecked,
  AfterContentInit, AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterContentChecked,
  OnDestroy{

  // carName = 'Ford';
  // carYear = 2015;
  @Input('carItem') car: { name: string, year: number };
  @Input() name: string;
  @ContentChild('carHeading') carHeading: ElementRef;

  constructor() {

  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
  }

  ngDoCheck() {

  }

  ngAfterContentChecked(): void {
  }

  ngAfterContentInit(): void {
  }

  ngAfterViewInit() {

  }

  ngOnDestroy(): void {
  }


}
