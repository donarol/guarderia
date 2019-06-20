import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoCambiarComponent } from './turno-cambiar.component';

describe('TurnoCambiarComponent', () => {
  let component: TurnoCambiarComponent;
  let fixture: ComponentFixture<TurnoCambiarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoCambiarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoCambiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
