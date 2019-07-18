import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaLazyComponent } from './encuesta-lazy.component';

describe('EncuestaLazyComponent', () => {
  let component: EncuestaLazyComponent;
  let fixture: ComponentFixture<EncuestaLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
