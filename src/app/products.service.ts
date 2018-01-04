import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
    products= [];

    constructor(private http: Http) {}

    getProducts() {
        return this.http.get("https://5a455e3dd0544c0012af57df.mockapi.io/myapp/object")
        .map(response => response.json()).map(response => response.products);
    }
}