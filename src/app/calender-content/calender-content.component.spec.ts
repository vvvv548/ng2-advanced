import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderContentComponent } from './calender-content.component';

describe('CalenderContentComponent', () => {
  let component: CalenderContentComponent;
  let fixture: ComponentFixture<CalenderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
