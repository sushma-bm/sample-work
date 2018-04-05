import { Component } from '@angular/core';
import { Product } from './products';

@Component ({
   selector: 'app-product-form',
   templateUrl: './product-form.component.html'
})

export class ProductFormComponent {
   model = new Product(1, 'ProductA');
}
