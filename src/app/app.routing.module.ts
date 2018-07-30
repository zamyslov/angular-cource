import {NgModule} from '@angular/core';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';
import {CarPageComponent} from './car-page/car-page.component';

const appRoutes: Routes = [
  { path: 'cars', component: CarsPageComponent },
  { path: 'cars/:id/:name', component: CarPageComponent },
  { path: '', component: HomePageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
