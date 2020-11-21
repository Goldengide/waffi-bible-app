import { Component, OnInit } from '@angular/core';
import { BibleService } from '../bible.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

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
