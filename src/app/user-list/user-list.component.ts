import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../sign-up.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    constructor(private service: SignUpService) { }

    users = this.readAll();

    readAll() {
        return this.service.readAll();
    }

    ngOnInit() {
    }

}
