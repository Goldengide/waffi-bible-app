import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibleService } from 'src/app/bible.service';

@Component({
  selector: 'app-book-chapter-list',
  templateUrl: './book-chapter-list.component.html',
  styleUrls: ['./book-chapter-list.component.scss']
})
export class BookChapterListComponent implements OnInit {
  chapters:any;
  chapterNumber:Number;
  bookShortName:any;

  constructor(private bibleService:BibleService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.bookShortName =  this.route.snapshot.paramMap.get('bookShortName');
    const bookShortName = this.bookShortName;
    console.log(bookShortName);
    this.bibleService.getBookWithBookShortName(bookShortName).subscribe({
      next: result => {
        this.chapters = result.data.chapters;
        this.chapterNumber = result.data.noOfChapters;

        console.log(result.data);
      }
    });
  }
}
