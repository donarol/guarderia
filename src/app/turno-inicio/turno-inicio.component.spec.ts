import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoInicioComponent } from './turno-inicio.component';

describe('TurnoInicioComponent', () => {
  let component: TurnoInicioComponent;
  let fixture: ComponentFixture<TurnoInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
