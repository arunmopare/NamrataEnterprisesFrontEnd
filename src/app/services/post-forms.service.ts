import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root',
})
export class PostFormsService {
    // private _devApiUrl = 'https://zinq-api-dev.herokuapp.com/';
    private _api = 'localhost:3000/';

    // private _devApiUrl = 'http://localhost:3200/';

    private _joinusUrl = this._api + 'forms/joinus';
    // private _joinusUrl = "https://zinq-website-backend-api.herokuapp.com/api/forms/joinus";
    private _contactUsUrl = this._api + 'forms/contactus';
    // private _contactUsUrl = "https://zinq-website-backend-api.herokuapp.com/api/forms/contactus";
    constructor(private http: HttpClient) { }

    joinUser(data): any {
        console.log('data', data);
        return this.http.post<any>(this._joinusUrl, data);
    }
    contactUser(data): any {
        console.log('data', data);
        return this.http.post<any>(this._contactUsUrl, data);
    }
}
