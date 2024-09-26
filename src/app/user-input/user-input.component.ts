import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
userInitialInvestment = signal<number>(100000);
userAnnualInvestment = signal<number>(1000);
userExpectedReturn = signal<number>(50);
userDuration = signal<number>(10);

  onSubmit() {
    // console.log('onSubmit()');
    // console.log(this.userInitialInvestment);
    // console.log(this.userAnnualInvestment);
    // console.log(this.userExpectedReturn);
    // console.log(this.userDuration);
    // to convert string to number (supposing user input is a string) :
    // this.calculate.emit({
    //   initialInvestment: +this.userInitialInvestment,
    //   annualInvestment: +this.userAnnualInvestment,
    //   expectedReturn: +this.userExpectedReturn,
    //   duration: +this.userDuration
    // });
    this.calculate.emit({
      initialInvestment: this.userInitialInvestment(),
      annualInvestment: this.userAnnualInvestment(),
      expectedReturn: this.userExpectedReturn(),
      duration: this.userDuration()
    });
  }
}
