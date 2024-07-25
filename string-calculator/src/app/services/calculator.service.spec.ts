import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toBe(0);
  });
  it('should return the number itself for a single number', () => {
    expect(service.add('1')).toBe(1);
  });
  it('should return the sum of two numbers, comma delimited', () => {
    expect(service.add('1,2')).toBe(3);
  });
  it('should return the sum of two numbers, newline delimited', () => {
    expect(service.add('1\n2')).toBe(3);
  });
  it('should return the sum of three numbers, delimited either way', () => {
    expect(service.add('1\n2,3')).toBe(6);
  });
  it('should throw an exception for negative numbers', () => {
    expect(() => service.add('1,-2')).toThrowError('Negatives not allowed: -2');
  });
  it('should ignore numbers greater than 1000', () => {
    expect(service.add('2,1001')).toBe(2);
  });
});
