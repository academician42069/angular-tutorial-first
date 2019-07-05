import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    checkedForm;

    constructor(private cartService: CartService, private formBuilder: FormBuilder) {
        this.items = this.cartService.getItems();
        this.remove = this.cartService.removeFromCart;
        this.clear = this.cartService.clearCart;

        this.checkedForm = formBuilder.group({
            name: '',
            address: '',
        });
    }

    onSubmit(value) {
        console.log(value);
        this.checkedForm.reset();
    }

    resetForm() {
        this.checkedForm.get('name').setValue('A man full of himself');
        this.checkedForm.get('address').setValue('A city full of itself');
    }

    ngOnInit() { }
}
