import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarContrasennaPage } from './recuperar-contrasenna.page';

describe('RecuperarContrasennaPage', () => {
  let component: RecuperarContrasennaPage;
  let fixture: ComponentFixture<RecuperarContrasennaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperarContrasennaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
