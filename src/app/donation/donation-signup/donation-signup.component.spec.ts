import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationSignupComponent } from './donation-signup.component';

describe('DonationSignupComponent', () => {
  let component: DonationSignupComponent;
  let fixture: ComponentFixture<DonationSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
