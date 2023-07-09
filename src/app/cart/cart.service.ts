import { Injectable } from '@angular/core';
import { Book } from 'src/types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Book[] = []
  constructor() { }

  add(book: Book) {
    console.log(book)
    this.cart.push(book)
  }

  remove(book: Book) {
    this.cart = this.cart.filter((b: Book) => b !== book)
  }

  get() {
    return this.cart;
  }
}
