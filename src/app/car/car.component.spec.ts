import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CarComponent} from './car.component';
import {CarService} from './car.service';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

describe('CarComponent', () => {

  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;
  let carService: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.debugElement.componentInstance;
    carService = fixture.debugElement.injector.get(CarService);
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
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisibility());
  });

  it('should display car if is visible', () => {
    carService.showCar();
    fixture.detectChanges();
    const native = fixture.debugElement.nativeElement;
    expect(native.querySelector('span').textContent).toEqual('Car is visible');
  });

  it('should not display car if is not visible', () => {
    carService.hideCar();
    fixture.detectChanges();
    const native = fixture.debugElement.nativeElement;
    expect(native.querySelector('span').textContent).not.toEqual('Car is visible');
  });

  it('should not get carName if not async', () => {
    spyOn(carService, 'getCarName').and.returnValue(of('TestCar').pipe(delay(100)));
    fixture.detectChanges();
    expect(component.carName).toBe(undefined);
  });

  it('should not get carName if async', async(() => {
    spyOn(carService, 'getCarName').and.returnValue(of('TestCar').pipe(delay(100)));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.carName).toEqual('TestCar');
    });
  }));
});
