import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaContainerComponent } from './encuesta-container.component';

describe('EncuestaContainerComponent', () => {
  let component: EncuestaContainerComponent;
  let fixture: ComponentFixture<EncuestaContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
