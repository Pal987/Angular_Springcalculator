
import { CalculatorService } from './../../services/calculator.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  numbers: string = '';
  result: number | null = null;
  errorMessage: string | null = null; // Add an error message property

  constructor(private calculatorService: CalculatorService) {}

  calculate() {
    try {
      this.result = this.calculatorService.add(this.numbers);
      this.errorMessage = null; // Clear error message on successful calculation
    } catch (e) {
      this.result = null;
      this.errorMessage = (e as Error).message; // Capture the error message
    }
  }
}