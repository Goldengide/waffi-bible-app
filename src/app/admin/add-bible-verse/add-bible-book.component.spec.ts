import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBibleBookComponent } from './add-bible-book.component';

describe('AddBibleBookComponent', () => {
  let component: AddBibleBookComponent;
  let fixture: ComponentFixture<AddBibleBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBibleBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBibleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
