import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [DecimalPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Productos 
{
  productos: Product[] = [];

  constructor(private productsService: Products) 
  {
    this.productos = this.productsService.getProducts();
  }
}
