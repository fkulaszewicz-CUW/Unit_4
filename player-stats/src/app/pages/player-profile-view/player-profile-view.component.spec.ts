import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProfileViewComponent } from './player-profile-view.component';

describe('PlayerProfileViewComponent', () => {
  let component: PlayerProfileViewComponent;
  let fixture: ComponentFixture<PlayerProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerProfileViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
