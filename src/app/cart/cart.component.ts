import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})

export class CartComponent implements OnInit {
    items;
    remove;
    clear;

    constructor(private cartService: CartService) {
        this.items = this.cartService.getItems();
        this.remove = this.cartService.removeFromCart;
        this.clear = this.cartService.clearCart;
    }

    ngOnInit() { }
}
