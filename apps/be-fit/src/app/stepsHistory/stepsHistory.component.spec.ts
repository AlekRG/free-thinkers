import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsHistoryComponent } from './stepsHistory.component';

describe('StepsHistoryComponent', () => {
  let component: StepsHistoryComponent;
  let fixture: ComponentFixture<StepsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepsHistoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
