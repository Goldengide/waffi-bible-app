import { Component, OnInit } from '@angular/core';
import { BibleService } from './bible.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BibleService]
})
export class AppComponent implements OnInit {
  title = 'waffi-bible-app';
  books:any;
  constructor(private bibleService:BibleService) {
  }
  ngOnInit(): void {
    console.log("hello");
    // console.log(this.books);
    this.bibleService.getBooks().subscribe({
      next: books => this.books = books
    });
  }

}
