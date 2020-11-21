import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BibleService } from 'src/app/bible.service';
import { BookDataModel } from 'src/app/book-data-model';
import { BooksDataSource } from './books-datasource';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<BookDataModel>;
  dataSource: BooksDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'shortname', 'description'];

  constructor(private bibleService: BibleService) {}
  ngOnInit() {
    this.dataSource = new BooksDataSource();
    this.bibleService.getBooks().subscribe({
      next: books => this.dataSource.data = books
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
