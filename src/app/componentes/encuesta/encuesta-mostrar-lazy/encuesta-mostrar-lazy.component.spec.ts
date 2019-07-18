import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaMostrarLazyComponent } from './encuesta-mostrar-lazy.component';

describe('EncuestaMostrarLazyComponent', () => {
  let component: EncuestaMostrarLazyComponent;
  let fixture: ComponentFixture<EncuestaMostrarLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaMostrarLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaMostrarLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
