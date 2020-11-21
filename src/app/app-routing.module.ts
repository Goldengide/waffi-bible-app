import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddBibleBookComponent } from './admin/add-bible-verse/add-bible-book.component'
import { BooksComponent } from './admin/add-bible-verse/books/books.component';

const routes:Routes = [
  // { path: '', redirectTo: 'app', pathMatch: 'full'},
  // {path: '', component: AppComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'users', component: UsersComponent},
  {path: 'add-book', component: AddBibleBookComponent},
  {path: 'books', component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
