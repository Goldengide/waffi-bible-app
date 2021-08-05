import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookChapterVerseListComponent } from './book-chapter-verse-list.component';

describe('BookChapterVerseListComponent', () => {
  let component: BookChapterVerseListComponent;
  let fixture: ComponentFixture<BookChapterVerseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookChapterVerseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookChapterVerseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
