import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { BookDataModel } from './book-data-model';

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  private _bibleApiUrl = "http://localhost:3030/books";
  // private _addBooksUrl = "http://localhost:3030/books";
  constructor(private http:HttpClient) { }

  getBible() {
    return {
      "productId":2,
      "productDb":3
    }
  }

  getBooks(): Observable<any> {
    return this.http.get(this._bibleApiUrl)
  }

  addBook(bookDataModel:BookDataModel): Observable<any> {
    return this.http.post(this._bibleApiUrl, bookDataModel);
    // return of(bookDataModel);
  }
}
