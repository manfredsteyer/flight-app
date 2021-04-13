// src/app/shared/city.pipe.spec.ts

import { TestBed } from '@angular/core/testing';
import { CityPipe } from './city.pipe';
import { CityService } from './city.service';

fdescribe('CityPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityPipe, CityService]
    });
  });

  it('should transform Hamburg to HAM', () => {
    const pipe = TestBed.inject(CityPipe);
    const result = pipe.transform('Hamburg', 'short');
    expect(result).toBe('HAM');
  });
});
