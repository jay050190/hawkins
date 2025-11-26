import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experts2009Component } from './experts2009.component';

describe('Experts2009Component', () => {
  let component: Experts2009Component;
  let fixture: ComponentFixture<Experts2009Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Experts2009Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Experts2009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
