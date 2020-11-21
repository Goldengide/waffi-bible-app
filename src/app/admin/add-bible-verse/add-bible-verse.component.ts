import { Component, OnInit } from '@angular/core';
interface Books {
  name:string;
}

@Component({
  selector: 'app-add-bible-verse',
  templateUrl: './add-bible-verse.component.html',
  styleUrls: ['./add-bible-verse.component.scss']
})


export class AddBibleVerseComponent implements OnInit {

  constructor() { }
  books:Books[] = [
    {name: "Genesis"},
    {name: "Exodus"},
    {name: "Leviticus"},
    {name: "Deuteronomy"}
  ]
  ngOnInit(): void {
    console.log(this.books);
  }

}
