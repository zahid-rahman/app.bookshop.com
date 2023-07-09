export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: ' Robert C. Martin',
        imageSrc:
          'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        price: 700,
      },

      {
        name: 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)',
        author: 'David Thomas',
        imageSrc:
          'https://m.media-amazon.com/images/I/51IA4hT6jrL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        price: 700,
      },
    ];
  }
}
