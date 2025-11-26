import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForQuoteComponent } from './request-for-quote.component';

describe('RequestForQuoteComponent', () => {
  let component: RequestForQuoteComponent;
  let fixture: ComponentFixture<RequestForQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestForQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
