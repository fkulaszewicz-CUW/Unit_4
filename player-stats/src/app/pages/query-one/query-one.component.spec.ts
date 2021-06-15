import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryOneComponent } from './query-one.component';

describe('QueryOneComponent', () => {
  let component: QueryOneComponent;
  let fixture: ComponentFixture<QueryOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
