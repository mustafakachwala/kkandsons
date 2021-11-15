import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {


    constructor(

        private httpClient: HttpClient,

    ) {

    }

    loadProducts(): Observable<any> {
        return this.httpClient.get('assets/product-list.json');
    }

}
