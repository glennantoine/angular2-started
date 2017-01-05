import { Component } from '@angular/core';
import { ProductService } from "./products/product.service";

@Component({
    moduleId: module.id,
    selector: 'pm-app',
    providers: [ProductService],
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})

export class AppComponent {
    pageTitle: string = `Acme Product Management`
}
