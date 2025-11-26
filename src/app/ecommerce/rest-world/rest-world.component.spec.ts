import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestWorldComponent } from './rest-world.component';

describe('RestWorldComponent', () => {
  let component: RestWorldComponent;
  let fixture: ComponentFixture<RestWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
