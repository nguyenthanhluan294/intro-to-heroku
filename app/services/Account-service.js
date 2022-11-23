import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

/*
    Prettify objects returned from Salesforce. This is optional, but it allows us to keep the templates independent
    from the Salesforce specific naming convention. This could also be done Salesforce-side by creating a custom REST service.
 */
    let accounts = (account) => {
        return {
            id: account.sfid,
            name: account.name,
            phone: account.phone,
            serialnumber: account.SLASerialNumber__c,
        };
    };

@Injectable()
export class AccountService {

    static get parameters() {
        return [Http];
    }

    constructor(http) {
        this.http = http;
    }

    findAll() {
        return this.http.get('/account').map(response => response.json().map(accounts));
    }

}
