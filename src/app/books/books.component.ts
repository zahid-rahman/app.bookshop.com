import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from 'src/types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private booksService: BooksService) {
  }
  userName: string = '';

  isShowing: boolean = true;

  

  ngOnInit(): void {
      console.log({onInit: 'on in it'});
      this.books = this.booksService.getBooks()
  }


  // addToCart(event: Book) {
  //   console.log('anything', event);
  // }
}
