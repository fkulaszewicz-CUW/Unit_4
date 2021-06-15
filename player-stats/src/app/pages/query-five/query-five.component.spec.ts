import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFiveComponent } from './query-five.component';

describe('QueryFiveComponent', () => {
  let component: QueryFiveComponent;
  let fixture: ComponentFixture<QueryFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
