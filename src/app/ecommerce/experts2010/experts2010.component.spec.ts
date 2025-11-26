import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experts2010Component } from './experts2010.component';

describe('Experts2010Component', () => {
  let component: Experts2010Component;
  let fixture: ComponentFixture<Experts2010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Experts2010Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Experts2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
