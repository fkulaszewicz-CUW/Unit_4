import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfileViewComponent } from './new-profile-view.component';

describe('NewProfileViewComponent', () => {
  let component: NewProfileViewComponent;
  let fixture: ComponentFixture<NewProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
