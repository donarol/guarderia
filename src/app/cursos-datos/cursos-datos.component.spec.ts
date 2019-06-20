import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDatosComponent } from './cursos-datos.component';

describe('CursosDatosComponent', () => {
  let component: CursosDatosComponent;
  let fixture: ComponentFixture<CursosDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
