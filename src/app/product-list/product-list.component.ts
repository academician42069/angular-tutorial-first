import { Component } from '@angular/core';

import { products } from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent {
    products = products;

    constructor() { }

    share() {
        window.alert('ALERT! You are being shared!');
    }

    onNotify() {
        window.alert('You will be notified when the phone is sold out :^)');
    }
}
