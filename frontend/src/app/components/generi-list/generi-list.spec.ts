import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneriList } from './generi-list';

describe('GeneriList', () => {
  let component: GeneriList;
  let fixture: ComponentFixture<GeneriList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneriList],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneriList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
