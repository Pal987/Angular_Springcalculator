import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
    const nums = numbers.split(/[\n,]/).map(num => parseInt(num, 10));
    const negatives = nums.filter(num => num < 0);
  
    if (negatives.length > 0) {
      throw new Error('Negatives not allowed: ' + negatives.join(','));
    }
  
    return nums.reduce((sum, current) => current > 1000 ? sum : sum + current, 0);
  }
}