import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensHistoryComponent } from './tokensHistory.component';

describe('TokensHistoryComponent', () => {
  let component: TokensHistoryComponent;
  let fixture: ComponentFixture<TokensHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TokensHistoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokensHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
