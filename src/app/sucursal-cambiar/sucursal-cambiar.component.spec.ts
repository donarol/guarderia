import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalCambiarComponent } from './sucursal-cambiar.component';

describe('SucursalCambiarComponent', () => {
  let component: SucursalCambiarComponent;
  let fixture: ComponentFixture<SucursalCambiarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalCambiarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalCambiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
