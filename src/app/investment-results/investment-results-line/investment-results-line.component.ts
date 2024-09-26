import { InvestmentResultData } from './investment-result-line.model';
import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results-line',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results-line.component.html',
  styleUrl: './investment-results-line.component.css'
})
export class InvestmentResultsLineComponent {

  @Input({required: true}) resultData!: InvestmentResultData;
}
