import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoDatosComponent } from './turno-datos.component';

describe('TurnoDatosComponent', () => {
  let component: TurnoDatosComponent;
  let fixture: ComponentFixture<TurnoDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
