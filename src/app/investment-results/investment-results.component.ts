import { InvestmentService } from './../investment.service';
import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private investmentService = inject(InvestmentService);

  // with computed function
  // results = computed(() => {
  //   return this.investmentService.resultData();
  // });
  results = this.investmentService.resultData.asReadonly();

}
