import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { BibleService } from 'src/app/bible.service';
import { BookDataModel } from 'src/app/book-data-model';

@Component({
  selector: 'app-add-bible-book',
  templateUrl: './add-bible-book.component.html',
  styleUrls: ['./add-bible-book.component.scss']
})
export class AddBibleBookComponent implements OnInit {

  defaultValues: BookDataModel = {
    name: "Genesis",
    shortname: "Gen",
    description: "Na this book tell the tori of how God take run the pafffi of heaven and earth"
  }

  bookDataModel:BookDataModel = {...this.defaultValues}

  constructor(private bibleService: BibleService) {

   }

  ngOnInit(): void {
    console.log(this.bookDataModel)
  }

  onSubmit = (form: NgForm) => {
    console.log("we don submit", form.valid);
    this.bibleService.addBook(this.bookDataModel).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  goToBookList =() => {
    // RouterLink()
  }
}
