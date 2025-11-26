import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthExpansionComponent } from './growth-expansion.component';

describe('GrowthExpansionComponent', () => {
  let component: GrowthExpansionComponent;
  let fixture: ComponentFixture<GrowthExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthExpansionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
