import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VigilMechanismComponent } from './vigil-mechanism.component';

describe('VigilMechanismComponent', () => {
  let component: VigilMechanismComponent;
  let fixture: ComponentFixture<VigilMechanismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VigilMechanismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VigilMechanismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
