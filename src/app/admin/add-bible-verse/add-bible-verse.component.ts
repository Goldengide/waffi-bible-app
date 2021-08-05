import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VerseDataModel } from "src/app/admin/verse-data-model";
import { BibleService } from 'src/app/bible.service';
@Component({
  selector: 'app-add-bible-verse',
  templateUrl: './add-bible-verse.component.html',
  styleUrls: ['./add-bible-verse.component.scss']
})


export class AddBibleVerseComponent implements OnInit {

  books:any;
  defaultValues: VerseDataModel = {
    shortname: "Gen",
    chapterNumber: 1,
    text: "In the begining God created the earth",
    number: 1,
  }

  verseDataModel:VerseDataModel = {...this.defaultValues}

  constructor(private bibleService:BibleService) { }

  ngOnInit(): void {
    this.bibleService.getBooks().subscribe({
      next: books => {this.books = books.data; console.log(books.data)}
    });
    // console.log(this.books);
  }

  onSubmit = (form: NgForm) => {
    console.log("we don submit", form.valid);
    this.bibleService.addVerse(this.verseDataModel).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }
  goToBookList(): void {}

}
