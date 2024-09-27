import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

// dev values
const A = 100000;
const B = 1000;
const C = 50;
const D = 10;
// uncoment for production
// const A = 0;
// const B = 0;
// const C = 0;
// const D = 0;


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

userInitialInvestment = signal<number>(A);
userAnnualInvestment = signal<number>(B);
userExpectedReturn = signal<number>(C);
userDuration = signal<number>(D);

constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: this.userInitialInvestment(),
      annualInvestment: this.userAnnualInvestment(),
      expectedReturn: this.userExpectedReturn(),
      duration: this.userDuration()
    });
    this.resetUserData();
  }

  private resetUserData(){
    this.userInitialInvestment.set(A),
    this.userAnnualInvestment.set(B),
    this.userExpectedReturn.set(C),
    this.userDuration.set(D)
  }
}
