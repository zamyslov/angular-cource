import {describe} from '@angular/core/testing/src/testing_internal';
import {PowPipe} from './pow.pipe';

describe('PowPipe', () => {
  let pipe: PowPipe;

  beforeEach(() => {
    pipe = new PowPipe();
  });

  it('should create pipe instance', () => {
    expect(pipe).toBeTruthy();
    expect(pipe.transform).toBeDefined();
  });

  it('should return 8 if called with 2 and 3', () => {
    expect(pipe.transform(2, 3)).toBe(8);
  });
});
