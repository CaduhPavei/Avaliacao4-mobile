import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DerrotaPage } from './derrota.page';

describe('DerrotaPage', () => {
  let component: DerrotaPage;
  let fixture: ComponentFixture<DerrotaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DerrotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
