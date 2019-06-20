import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParienteNuevoComponent } from './pariente-nuevo.component';

describe('ParienteNuevoComponent', () => {
  let component: ParienteNuevoComponent;
  let fixture: ComponentFixture<ParienteNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParienteNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParienteNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
