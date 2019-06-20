import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosNuevoComponent } from './cursos-nuevo.component';

describe('CursosNuevoComponent', () => {
  let component: CursosNuevoComponent;
  let fixture: ComponentFixture<CursosNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
