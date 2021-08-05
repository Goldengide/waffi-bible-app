import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseDemoComponent } from './verse-demo.component';

describe('VerseDemoComponent', () => {
  let component: VerseDemoComponent;
  let fixture: ComponentFixture<VerseDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerseDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
