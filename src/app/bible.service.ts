import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { BookDataModel } from './book-data-model';
import { VerseDataModel } from './admin/verse-data-model';

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  private _bibleApiUrl = "http://localhost:3030/books";
  // private _addVerseApiUrl = "http://localhost:3030/books/name/:ShortBookName/:chapterNumber"
  // private _bibleApiBookShortname = "http://localhost:3030/name/:BookShortName";
  private _chapterUrlWithID = "";
  constructor(private http: HttpClient) { }

  getBible() {
    return {
      "productId": 2,
      "productDb": 3
    }
  }

  getBooks(): Observable<any> {
    return this.http.get(this._bibleApiUrl)
  }

  getBookWithBookShortName(bookShortName: String): Observable<any> {
    const apiUrl = this._bibleApiUrl + "/name/" + bookShortName;
    return this.http.get(apiUrl);

  }

  // getVerses(bookShortName: String, chapterNumber: Number): Observable<any> {
  //   const apiUrl = this._bibleApiUrl + "/name/" + bookShortName + ;
  // }


  getChapters(bookId: Number): Observable<any> {
    return this.http.get(this._chapterUrlWithID);
  }

  addBook(bookDataModel: BookDataModel): Observable<any> {
    return this.http.post(this._bibleApiUrl, bookDataModel);
    // return of(bookDataModel);
  }

  addVerse(verseDataModel: VerseDataModel): Observable<any> {
   const addVerseApiUrl =  this._bibleApiUrl + `/name/${verseDataModel.shortname}/${verseDataModel.chapterNumber}`;
    return this.http.post(addVerseApiUrl, verseDataModel);
  }
}
