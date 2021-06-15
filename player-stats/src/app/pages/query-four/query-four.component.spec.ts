import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFourComponent } from './query-four.component';

describe('QueryFourComponent', () => {
  let component: QueryFourComponent;
  let fixture: ComponentFixture<QueryFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
