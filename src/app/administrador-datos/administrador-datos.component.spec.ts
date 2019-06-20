import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorDatosComponent } from './administrador-datos.component';

describe('AdministradorDatosComponent', () => {
  let component: AdministradorDatosComponent;
  let fixture: ComponentFixture<AdministradorDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
