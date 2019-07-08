import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
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

    static isZipOk(zip: string) {
        return zip.length < 3;
    }

    static isCityOk(city: string) {
        return city.toLowerCase().charAt(0) === 'a';
    }

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
            }, {
                validators: this.crossValidation,
            })
        });
    }

    forbiddenName() {
        return (formControl) => {
            return formControl.value === 'Roman' ? {forbidden: {invalid: true}} : null;
        };
    }

    crossValidation(formGroup) {
        const zip = formGroup.get('zip').value;
        const zipStatus = CartComponent.isZipOk(zip);

        const city = formGroup.get('city').value;
        const cityStatus = CartComponent.isCityOk(city);

        return zipStatus ? null : {
            zipStatus,
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

    get address() {
        return this.checkedForm.get('address') as FormGroup;
    }

    ngOnInit() { }
}
