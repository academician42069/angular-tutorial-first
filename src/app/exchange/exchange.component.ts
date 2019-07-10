import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { data } from '../currencies';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  checkedForm;
  currencyForm;
  currencyList;

  constructor(private formBuilder: FormBuilder) {
    this.currencyForm = formBuilder.group({
      inputCurrency: formBuilder.array([ this.newCurrency('EUR', 0) ]),
      outputCurrency: formBuilder.array([ this.newCurrency('USD', 0) ]),
    });
    this.currencyList = data;
  }

  newCurrency(currency, amount) {
    return this.formBuilder.group({
      currency,
      amount,
    });
  }

  addCurrency(currency, amount) {
    const currencies = this.currencyForm.get('inputCurrency') as FormArray;
    currencies.push(this.newCurrency(currency, amount));
  }

  onSubmit() {

  }

  ngOnInit() {
  }

}
