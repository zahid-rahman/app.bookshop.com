import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from 'src/types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnDestroy {

  @Input() book: Book = {} as Book;
  isInCart: boolean = false
  // @Output() bookEmitter = new EventEmitter<Book>();

  constructor(private cartService: CartService) {}
  addToCart() {
    // console.log(this.book)
    // this.bookEmitter.emit(this.book);
    this.isInCart = true;
    this.cartService.add(this.book);
  }

  removeFromCart() {
    // console.log(this.book)
    // this.bookEmitter.emit(this.book);
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

  ngOnDestroy(): void {
    console.log({ onDestroy: 'on destroy' });
  }
}
