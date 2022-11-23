import {OnInit} from '@angular/core';
import {Page, NavController} from 'ionic-angular';
import {PropertyDetailsPage} from '../property-details/property-details';
import {AccountService} from '../../services/Account-service';
import {} from '../../services/Account-service';
@Page({
    templateUrl: 'build/pages/Account-list/Account-list.html'
})
export class AccountListPage {

    static get parameters() {
        return [[NavController], [AccountService]];
    }

    constructor(nav, accountService) {
        this.nav = nav;
        this.accountService = accountService;
    }

    ngOnInit() {
        this.accountService.findAll().subscribe(accounts => this.accounts = accounts);
    }

    CreateAccount(){
        this.pages = [
            {title: 'create account', component: form-create-account, icon: "bookmark"},

        ];
    }

}