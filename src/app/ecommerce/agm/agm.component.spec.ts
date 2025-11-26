import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AGMComponent } from './agm.component';

describe('AGMComponent', () => {
  let component: AGMComponent;
  let fixture: ComponentFixture<AGMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AGMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AGMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
