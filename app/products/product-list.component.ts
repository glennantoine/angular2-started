import { Component, OnInit } from '@angular/core';
import { ProductService } from "./product.service";
import {IProduct} from './product';


@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    // ***************************************************
    // Universal Method of Setting up Dependency Injection
    // private: _productService;
    // constructor(productService: ProductService) {
    //     _productService = productService;
    // }
    // NG2 Shorthand Method of Setting up Dependency Injection
    constructor(private _productService: ProductService){
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}