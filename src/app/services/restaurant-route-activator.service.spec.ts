import { TestBed } from '@angular/core/testing';

import { RestaurantRouteActivatorService } from './restaurant-route-activator.service';

describe('RestaurantRouteActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantRouteActivatorService = TestBed.get(RestaurantRouteActivatorService);
    expect(service).toBeTruthy();
  });
});
