import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalInicioComponent } from './sucursal-inicio.component';

describe('SucursalInicioComponent', () => {
  let component: SucursalInicioComponent;
  let fixture: ComponentFixture<SucursalInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
