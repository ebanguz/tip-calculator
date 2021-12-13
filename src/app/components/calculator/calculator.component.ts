import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  form: FormGroup;
  isCheckedRadioBtn: boolean = false;

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
      tipPercentage: ['', []],
      numberPeople: ['', [Validators.required, Validators.min(1)]],
    });
  }

  fun() {
    this.isCheckedRadioBtn = false;
    console.log('CONSOLE LOGGGG FOCUS ON CUSTOM');
  }

  //   Make function calculate

  isReady() {
    if (this.form.valid) {
      console.log('CALCULAAAAAAAAA');
    } else {
      console.log('AUN NO');
    }
  }
}
