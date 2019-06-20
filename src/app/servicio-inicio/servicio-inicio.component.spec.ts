import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioInicioComponent } from './servicio-inicio.component';

describe('ServicioInicioComponent', () => {
  let component: ServicioInicioComponent;
  let fixture: ComponentFixture<ServicioInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
