import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourselfRepairsComponent } from './yourself-repairs.component';

describe('YourselfRepairsComponent', () => {
  let component: YourselfRepairsComponent;
  let fixture: ComponentFixture<YourselfRepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourselfRepairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourselfRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
