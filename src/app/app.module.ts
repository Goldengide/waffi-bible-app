import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {MatSelectModule } from "@angular/material/select";
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import {MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { AddBibleVerseComponent } from './admin/add-bible-verse/add-bible-verse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBibleBookComponent } from './admin/add-bible-verse/add-bible-book.component';
import { BooksComponent } from './admin/add-bible-verse/books/books.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BookListComponent } from './users/book-list/book-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { VerseDemoComponent } from './users/verse-demo/verse-demo.component';
import { ChapterListComponent } from './users/chapter-list/chapter-list.component';
import { BookChapterListComponent } from './users/book-list/book-chapter-list.component';
import { BookChapterVerseListComponent } from './users/book-list/book-chapter-verse-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UsersComponent,
    AddBibleVerseComponent,
    AddBibleBookComponent,
    BooksComponent,
    BookListComponent,
    VerseDemoComponent,
    ChapterListComponent,
    BookChapterListComponent,
    BookChapterVerseListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
