import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDiffComponent } from './user-diff.component';

describe('UserDiffComponent', () => {
  let component: UserDiffComponent;
  let fixture: ComponentFixture<UserDiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
