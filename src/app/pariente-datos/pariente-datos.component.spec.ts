import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParienteDatosComponent } from './pariente-datos.component';

describe('ParienteDatosComponent', () => {
  let component: ParienteDatosComponent;
  let fixture: ComponentFixture<ParienteDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParienteDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParienteDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
