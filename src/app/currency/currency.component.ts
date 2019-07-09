import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  rates: object[] = [];
  length = 0;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    const action = (value) => {
      this.rates.push(value);
    };

    const complete = (value) => {
      this.length = value;
    };

    const filterCallback = ({value}) => value > 2;

    const mapCallback = ({currency, value}) => ({currency, value, icon: '🏦'});

    const Observer = this.currencyService.Observer;

    Observer
    .filter(filterCallback)
    .map(mapCallback)
    .subscribe(action, complete);
  }

}
