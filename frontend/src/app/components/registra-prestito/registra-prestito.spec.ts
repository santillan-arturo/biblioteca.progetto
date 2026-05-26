import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraPrestito } from './registra-prestito';

describe('RegistraPrestito', () => {
  let component: RegistraPrestito;
  let fixture: ComponentFixture<RegistraPrestito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistraPrestito],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistraPrestito);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
