import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisedDealersComponent } from './authorised-dealers.component';

describe('AuthorisedDealersComponent', () => {
  let component: AuthorisedDealersComponent;
  let fixture: ComponentFixture<AuthorisedDealersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorisedDealersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorisedDealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
