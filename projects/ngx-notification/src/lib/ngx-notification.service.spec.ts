import { TestBed } from '@angular/core/testing';

import { NgxNotificationService } from './ngx-notification.service';

describe('NgxNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxNotificationService = TestBed.get(NgxNotificationService);
    expect(service).toBeTruthy();
  });
});
