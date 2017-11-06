import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedLayoutComponent } from './authorized-layout.component';

describe('AuthorizedLayoutComponent', () => {
  let component: AuthorizedLayoutComponent;
  let fixture: ComponentFixture<AuthorizedLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizedLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
