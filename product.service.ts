import { Injectable } from '@angular/core';
import { Product } from './product';
const product1 = new Product("kaas","gauda","oud",2.2);
const product2 = new Product("kaas","parmeser","jong",5.5);
@Injectable()
export class ProductService {

   
   constructor() {}
   

  // Get all products
  getAllProducts() {
   const products = [product1,product2]
   return [...products];
}
}
