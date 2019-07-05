import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class WishlistService {
    items = [];

    constructor() { }

    addToWishlist(product) {
        if (this.items.indexOf(product) === -1) {
            window.alert('Item added to wishlist');
            this.items.push(product);
        }
    }

    removeFromWishlist(product) {
        this.items.splice(this.items.indexOf(product), 1);
        return this.items;
    }

    clearWishlist() {
        this.items = [];
    }
}
