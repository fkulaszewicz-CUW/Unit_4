import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTwoComponent } from './query-two.component';

describe('QueryTwoComponent', () => {
  let component: QueryTwoComponent;
  let fixture: ComponentFixture<QueryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
