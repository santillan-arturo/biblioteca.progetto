import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibriList } from './libri-list';

describe('LibriList', () => {
  let component: LibriList;
  let fixture: ComponentFixture<LibriList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibriList],
    }).compileComponents();

    fixture = TestBed.createComponent(LibriList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
