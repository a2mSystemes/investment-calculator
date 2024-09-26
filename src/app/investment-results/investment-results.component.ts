import { Component, inject } from '@angular/core';
import { InvestmentResultsLineComponent } from "./investment-results-line/investment-results-line.component";
import { InvestmentResultsCalculatorService } from './investment-results-calculator.service';
import { InvestmentResultData } from './investment-results-line/investment-result-line.model';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [InvestmentResultsLineComponent],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  investmentService : InvestmentResultsCalculatorService = inject(InvestmentResultsCalculatorService);

  hasResults(): boolean{
    return this.investmentService.hasResults();
  }
  getResults(): InvestmentResultData[]{
    return this.investmentService.getResults();
  }
}
