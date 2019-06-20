import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPagosComponent } from './inicio-pagos.component';

describe('InicioPagosComponent', () => {
  let component: InicioPagosComponent;
  let fixture: ComponentFixture<InicioPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
