import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    constructor(private http: HttpClient) { }

    items = [];

    addToCart(product) {
        this.items.push(product);
    }

    removeFromCart(product) {
        console.log(`removing ${this.items.indexOf(product)}`);
        this.items.splice(this.items.indexOf(product), 1);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }
}
