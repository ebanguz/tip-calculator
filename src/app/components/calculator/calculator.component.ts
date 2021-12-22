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
  }

  //   Make function calculate

  isReady() {
    if (this.form.valid) {
      console.log('CALCULAAAAAAAAA');
    }
  }

  // onChange(chosenItem: any, inpCheckbox: HTMLInputElement) {
  //   console.log(inpCheckbox);
  //   inpCheckbox.checked = !chosenItem.checked;
  // }
}
