import {NgModule} from '@angular/core';
import {CarPageComponent} from './car-page/car-page.component';
import {CarsPageComponent} from './cars-page.component';
import {CarsService} from '../cars.service';
import {CommonModule} from '@angular/common';
import {CarsRoutingModule} from './cars.routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [CarPageComponent, CarsPageComponent],
  imports: [CommonModule, CarsRoutingModule, SharedModule],
  providers: [CarsService]
})
export class CarsModule {}
