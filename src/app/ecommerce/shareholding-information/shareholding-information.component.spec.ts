import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholdingInformationComponent } from './shareholding-information.component';

describe('ShareholdingInformationComponent', () => {
  let component: ShareholdingInformationComponent;
  let fixture: ComponentFixture<ShareholdingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareholdingInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareholdingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
