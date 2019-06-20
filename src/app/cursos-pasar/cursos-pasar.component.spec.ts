import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosPasarComponent } from './cursos-pasar.component';

describe('CursosPasarComponent', () => {
  let component: CursosPasarComponent;
  let fixture: ComponentFixture<CursosPasarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosPasarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosPasarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
