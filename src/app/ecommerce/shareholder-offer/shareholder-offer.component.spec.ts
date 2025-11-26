import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderOfferComponent } from './shareholder-offer.component';

describe('ShareholderOfferComponent', () => {
  let component: ShareholderOfferComponent;
  let fixture: ComponentFixture<ShareholderOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareholderOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareholderOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
