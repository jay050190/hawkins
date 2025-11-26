import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateGovernanceComponent } from './corporate-governance.component';

describe('CorporateGovernanceComponent', () => {
  let component: CorporateGovernanceComponent;
  let fixture: ComponentFixture<CorporateGovernanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateGovernanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateGovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
