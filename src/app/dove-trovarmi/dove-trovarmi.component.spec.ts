import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoveTrovarmiComponent } from './dove-trovarmi.component';

describe('DoveTrovarmiComponent', () => {
  let component: DoveTrovarmiComponent;
  let fixture: ComponentFixture<DoveTrovarmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoveTrovarmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoveTrovarmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
