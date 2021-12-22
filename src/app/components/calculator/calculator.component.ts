import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RadioButton } from 'src/app/interfaces/radio-button';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  form: FormGroup;
  custom: number = 0;
  totalPeople: number = 0;
  tipAmount: number = 0;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  get numberPeopleValid(): boolean {
    return (this.form.get('numberPeople')?.invalid &&
      this.form.get('numberPeople')?.touched) as boolean;
  }
  get billValid(): boolean {
    return (this.form.get('bill')?.invalid &&
      this.form.get('bill')?.touched) as boolean;
  }

  createForm() {
    this.form = this.fb.group({
      bill: ['', [Validators.required, Validators.min(1)]],
      tipPercentage: [0, []],
      numberPeople: [1, [Validators.required, Validators.min(1)]],
    });
  }

  selectedCustom() {
    this.form.setValue({
      bill: this.form.value.bill,
      tipPercentage: this.custom,
      numberPeople: this.form.value.numberPeople,
    });
    this.isReady();
  }

  //   Make function calculate

  calculate(values: any) {
    const { bill, tipPercentage, numberPeople } = values;

    let tip = (tipPercentage / 100) * bill;
    this.tipAmount = tip / numberPeople;
    this.totalPeople = (bill + tip) / numberPeople;

    console.log(
      `Total People: ${this.totalPeople}; Tip Amount: ${this.tipAmount}`
    );
  }

  isReady() {
    if (this.form.valid) {
      this.calculate(this.form.value);
    } else {
      this.totalPeople = 0;
      this.tipAmount = 0;
    }
  }

  reset(event: number) {
    console.log(event);

    this.form.reset({
      bill: '',
      tipPercentage: 0,
      numberPeople: 1,
    });
  }
}
