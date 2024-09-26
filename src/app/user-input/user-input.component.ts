import { InvestmentResultsCalculatorService } from './../investment-results/investment-results-calculator.service';
import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutletContext } from '@angular/router';
import { InvestmentUserData } from './investment-user-data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {

  private investmentCalculatorService: InvestmentResultsCalculatorService = inject(InvestmentResultsCalculatorService)

  userData: InvestmentUserData = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  };



  onCalculate() {
    console.log(
      JSON.stringify(this.userData)
    );
    this.investmentCalculatorService.calculateInvestment(this.userData);
    console.log(
      JSON.stringify(this.investmentCalculatorService.getResults())
    );
  }
}
