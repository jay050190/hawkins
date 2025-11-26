import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesServiceComponent } from './sales-service.component';

describe('SalesServiceComponent', () => {
  let component: SalesServiceComponent;
  let fixture: ComponentFixture<SalesServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
