import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorPersonalComponent } from './administrador-personal.component';

describe('AdministradorPersonalComponent', () => {
  let component: AdministradorPersonalComponent;
  let fixture: ComponentFixture<AdministradorPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
