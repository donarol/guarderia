import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiasNuevoComponent } from './alergias-nuevo.component';

describe('AlergiasNuevoComponent', () => {
  let component: AlergiasNuevoComponent;
  let fixture: ComponentFixture<AlergiasNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlergiasNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergiasNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
