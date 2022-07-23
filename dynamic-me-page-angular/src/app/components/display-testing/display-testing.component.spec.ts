import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTestingComponent } from './display-testing.component';

describe('DisplayTestingComponent', () => {
  let component: DisplayTestingComponent;
  let fixture: ComponentFixture<DisplayTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
