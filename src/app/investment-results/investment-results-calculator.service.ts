import { InvestmentResultData } from './investment-results-line/investment-result-line.model';
import { Injectable } from '@angular/core';
import { InvestmentUserData } from '../user-input/investment-user-data.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentResultsCalculatorService {

private results: InvestmentResultData[] = [];
  constructor() { }


  calculateInvestment(data: InvestmentUserData): void{
    this.resetResults();
    let investmentValue = data.initialInvestment;
    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
      this.results.push({
        year: year,
        investmentValue: investmentValue,
        interest: interestEarnedInYear,
        // annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        investedCapital: data.initialInvestment + data.annualInvestment * year,
      });
    }

  }

  getResults(): InvestmentResultData[] {
    return this.results;
  }

  resetResults(): void{
    this.results = [];
  }
  hasResults(): boolean {
    return this.results.length > 0;
  }
};


