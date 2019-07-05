import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
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
            name: ['', [Validators.minLength(4), this.forbiddenName()]],
            address: formBuilder.group({
                street: '',
                city: '',
                state: '',
                zip: '',
            })
        });
    }

    forbiddenName() {
        return (formControl) => {
            return formControl.value === 'Roman' ? {forbidden: {invalid: true}} : null;
        };
    }

    onSubmit(value) {
        console.log(value);
        this.checkedForm.reset();
    }

    resetForm() {
        this.checkedForm.patchValue({
            name: 'A man full of himself',
        });
    }

    get name() {
        return this.checkedForm.get('name') as FormControl;
    }

    ngOnInit() { }
}
