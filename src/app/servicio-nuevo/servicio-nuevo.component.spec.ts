import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioNuevoComponent } from './servicio-nuevo.component';

describe('ServicioNuevoComponent', () => {
  let component: ServicioNuevoComponent;
  let fixture: ComponentFixture<ServicioNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
