import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddBibleBookComponent } from './admin/add-bible-verse/add-bible-book.component'
import { BooksComponent } from './admin/add-bible-verse/books/books.component';
import { AddBibleVerseComponent } from './admin/add-bible-verse/add-bible-verse.component';
import { BookChapterListComponent } from './users/book-list/book-chapter-list.component';
import { BookChapterVerseListComponent } from './users/book-list/book-chapter-verse-list.component';
import { BookListComponent } from './users/book-list/book-list.component';

const routes:Routes = [
  // { path: '', redirectTo: 'app', pathMatch: 'full'},
  // {path: '', component: AppComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'users', component: UsersComponent},
  {path: 'books', component: BookListComponent},
  {path: 'add-book', component: AddBibleBookComponent},
  {path: 'add-verse', component: AddBibleVerseComponent},
  {path: 'books', component: BooksComponent},
  {path: 'books/:bookShortName', component: BookChapterListComponent},
  {path: 'books/:bookShortName/:chapterNumber', component: BookChapterVerseListComponent},
  // {path: 'books/:bookShortName/:chapterNumber', component: BookChapterVerseListComponent},
  {path: 'add-verse', component: AddBibleVerseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
