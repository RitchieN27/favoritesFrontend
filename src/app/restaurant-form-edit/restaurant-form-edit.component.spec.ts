import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFormEditComponent } from './restaurant-form-edit.component';

describe('RestaurantFormEditComponent', () => {
  let component: RestaurantFormEditComponent;
  let fixture: ComponentFixture<RestaurantFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
