import { TestBed } from '@angular/core/testing';

import { MenuConfigurationService } from './menu-configuration.service';

describe('MenuConfigurationService', () => {
  let service: MenuConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
