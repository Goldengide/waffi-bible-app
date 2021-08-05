import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibleService } from 'src/app/bible.service';

@Component({
  selector: 'app-book-chapter-verse-list',
  templateUrl: './book-chapter-verse-list.component.html',
  styleUrls: ['./book-chapter-verse-list.component.scss']
})
export class BookChapterVerseListComponent implements OnInit {
  chapterVerses: any;
  chapterNumber: Number;
  bookShortName: any;
  bookName: any;
  prevChapterNumber: Number;
  nextChapterNumber: Number;
  // || this.nextChapterNumber > 50) {
  showleftArrow: boolean;
  showRightArrow: boolean;
  noOfChapters: Number;

  constructor(private bibleService: BibleService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.bookShortName =  this.route.snapshot.paramMap.get('bookShortName');
    this.route.paramMap.subscribe(
      params => {
        this.bookShortName = params.get('bookShortName');
        this.chapterNumber = +params.get('chapterNumber');
        const chapterNumberIndex = +params.get('chapterNumber') - 1;
        this.getVerses(this.bookShortName, chapterNumberIndex);
        this.prevChapterNumber = chapterNumberIndex;
        this.nextChapterNumber = chapterNumberIndex + 2;

      }
    );
    ;
  }

  nextChapter(): void {

  }
  getVerses(bookShortName: string, chapterNumberIndex: number): void {
    this.bibleService.getBookWithBookShortName(bookShortName).subscribe({
      next: result => {
        this.bookName = result.data.name;
        this.noOfChapters = result.data.noOfChapters;
        this.chapterVerses = result.data.chapters[chapterNumberIndex].verses;
        // console.log(this.noOfChapters);
        this.showleftArrow = this.prevChapterNumber >= 1? true :false;
        this.showRightArrow = this.nextChapterNumber <= this.noOfChapters? true :false;
          //  console.log(this.showleftArrow);
          //  console.log(this.showRightArrow);
        // console.log(this.prevChapterNumber);
        // console.log(this.nextChapterNumber);
      }
    })
  }

  // prevLinkClicked():void {}



}
