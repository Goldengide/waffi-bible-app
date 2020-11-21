import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBibleVerseComponent } from './add-bible-verse.component';

describe('AddBibleVerseComponent', () => {
  let component: AddBibleVerseComponent;
  let fixture: ComponentFixture<AddBibleVerseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBibleVerseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBibleVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
