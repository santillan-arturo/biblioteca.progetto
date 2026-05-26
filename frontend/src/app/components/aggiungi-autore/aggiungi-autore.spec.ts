import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiAutore } from './aggiungi-autore';

describe('AggiungiAutore', () => {
  let component: AggiungiAutore;
  let fixture: ComponentFixture<AggiungiAutore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AggiungiAutore],
    }).compileComponents();

    fixture = TestBed.createComponent(AggiungiAutore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
