import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaNuevaComponent } from './cuenta-nueva.component';

describe('CuentaNuevaComponent', () => {
  let component: CuentaNuevaComponent;
  let fixture: ComponentFixture<CuentaNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
