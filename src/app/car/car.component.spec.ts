import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CarComponent} from './car.component';
import {CarService} from './car.service';

describe('CarComponent', () => {

  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('it should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render h1 with title my header', () => {
    fixture.detectChanges();
    const native = fixture.debugElement.nativeElement;
    expect(native.querySelector('h1').textContent).toEqual('My header');
  });

  it('should inject carService', () => {
    const carService = fixture.debugElement.injector.get(CarService);
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisibility());
  });

  it('should display car if is visible', () => {
    const carService = fixture.debugElement.injector.get(CarService);
    carService.showCar();
    fixture.detectChanges();
    const native = fixture.debugElement.nativeElement;
    expect(native.querySelector('span').textContent).toEqual('Car is visible');
  });

  it('should not display car if is not visible', () => {
    const carService = fixture.debugElement.injector.get(CarService);
    carService.hideCar();
    fixture.detectChanges();
    const native = fixture.debugElement.nativeElement;
    expect(native.querySelector('span').textContent).not.toEqual('Car is visible');
  });
});
