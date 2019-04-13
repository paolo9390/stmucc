import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UKComponent } from './uk.component';

describe('UKComponent', () => {
  let component: UKComponent;
  let fixture: ComponentFixture<UKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
