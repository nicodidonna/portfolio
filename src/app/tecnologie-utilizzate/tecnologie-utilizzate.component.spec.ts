import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologieUtilizzateComponent } from './tecnologie-utilizzate.component';

describe('TecnologieUtilizzateComponent', () => {
  let component: TecnologieUtilizzateComponent;
  let fixture: ComponentFixture<TecnologieUtilizzateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologieUtilizzateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologieUtilizzateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
