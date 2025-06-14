import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VitoriaPage } from './vitoria.page';

describe('VitoriaPage', () => {
  let component: VitoriaPage;
  let fixture: ComponentFixture<VitoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VitoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
