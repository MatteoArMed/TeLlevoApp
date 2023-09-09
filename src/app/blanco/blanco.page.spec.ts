import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlancoPage } from './blanco.page';

describe('BlancoPage', () => {
  let component: BlancoPage;
  let fixture: ComponentFixture<BlancoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BlancoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
