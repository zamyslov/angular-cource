import {TestBed} from '@angular/core/testing';
import {CarComponent} from './car.component';

describe('CarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
  });

  it('it should create component', () => {
    const fixture = TestBed.createComponent(CarComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render h1 with title my header', () => {
    const fixture = TestBed.createComponent(CarComponent);
    fixture.detectChanges();
    const component = fixture.debugElement.nativeElement;
    expect(component.querySelector('h1').textContent).toEqual('My header');
  });
});
