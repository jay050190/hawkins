import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTheBeginningComponent } from './in-the-beginning.component';

describe('InTheBeginningComponent', () => {
  let component: InTheBeginningComponent;
  let fixture: ComponentFixture<InTheBeginningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InTheBeginningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InTheBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
