import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductsService]
})
export class AppComponent {
  products = [];  
  constructor(private productsService: ProductsService) {
  
  }
  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
    
}
