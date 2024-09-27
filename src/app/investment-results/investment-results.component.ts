import { InvestmentService } from './../investment.service';
import { Component, inject } from '@angular/core';
// import {computed} from '@angular/core';

@Component({
  selector: 'app-investment-results',
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
