import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryThreeComponent } from './query-three.component';

describe('QueryThreeComponent', () => {
  let component: QueryThreeComponent;
  let fixture: ComponentFixture<QueryThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
