import { Component } from '@angular/core';
import { products } from '../products';
import { WishlistService } from '../wishlist.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent {
    products = products;

    constructor(private wishlist: WishlistService) {
    }

    share() {
        window.alert('ALERT! You are being shared!');
    }

    onNotify() {
        window.alert('You will be notified when the phone is sold out :^)');
    }

    addToWishlist(product) {
        this.wishlist.addToWishlist(product);
    }

    checkWishlist(item) {
        return this.wishlist.items.indexOf(item) !== -1;
    }
}
