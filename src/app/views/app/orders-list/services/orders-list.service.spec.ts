/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrdersListService } from './orders-list.service';

describe('Service: OrdersList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersListService]
    });
  });

  it('should ...', inject([OrdersListService], (service: OrdersListService) => {
    expect(service).toBeTruthy();
  }));
});
