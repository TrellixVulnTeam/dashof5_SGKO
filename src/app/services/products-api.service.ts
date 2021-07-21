import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Produto } from '../pages/apps/aio-table/interfaces/products.models';

@Injectable({providedIn: 'root'})

export class ProductsApiService {
    private API = `${environment.API}produtos`;

    constructor(private httpClient: HttpClient) {}

    getAllProducts() {
        return this.httpClient.get<Produto[]>(this.API)
    }
    
}