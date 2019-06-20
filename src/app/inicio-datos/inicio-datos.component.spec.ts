import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDatosComponent } from './inicio-datos.component';

describe('InicioDatosComponent', () => {
  let component: InicioDatosComponent;
  let fixture: ComponentFixture<InicioDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
