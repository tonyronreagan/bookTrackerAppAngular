import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service.';
import {Reader} from 'app/models/reader';
import {allBooks, allReaders} from 'app/data';
import {Book} from '../models/book';

@Injectable()
export class DataService {

  mostPopularBook: Book = allBooks[0];

  constructor(private loggerService: LoggerService) { }

  getAllReaders(): Reader[] {

    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Book[] {

    return allBooks;
  }

  getBooksById(id: number): Book {
    return allBooks.find(book => book.bookID === id);
  }

  setMostPopularBook(popularBook: Book): void{
    this.mostPopularBook = popularBook;

  }
}
