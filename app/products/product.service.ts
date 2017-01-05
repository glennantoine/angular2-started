import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { PRODUCTS } from "./products.data";

@Injectable()
export class ProductService {
    getProducts(): IProduct[] {
        return PRODUCTS;
    }
}