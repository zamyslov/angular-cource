import {NgModule} from '@angular/core';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RouterModule, Routes} from '@angular/router';
import {CarPageComponent} from './car-page/car-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from './auth-guard.service';
import {NewPageComponent} from './new-page/new-page.component';

const appRoutes: Routes = [
  {
    path: 'cars', component: CarsPageComponent, canActivate: [AuthGuard], children: [
      {path: ':id/:name', component: CarPageComponent}
    ]
  },
  // { path: 'cars/:id/:name', component: CarPageComponent },
  {path: '', component: HomePageComponent},
  {path: 'new', component: NewPageComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
