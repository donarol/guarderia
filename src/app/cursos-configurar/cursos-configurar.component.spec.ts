import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosConfigurarComponent } from './cursos-configurar.component';

describe('CursosConfigurarComponent', () => {
  let component: CursosConfigurarComponent;
  let fixture: ComponentFixture<CursosConfigurarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosConfigurarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosConfigurarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
