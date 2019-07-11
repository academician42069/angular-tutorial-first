import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss'],
})

export class TopBarComponent implements OnInit {
    constructor(private signUpService: SignUpService) { }

    ngOnInit() { }

    isSignedIn() {
        return this.signUpService.status;
    }
}
