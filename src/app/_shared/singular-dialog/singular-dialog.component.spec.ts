import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularDialogComponent } from './singular-dialog.component';

describe('SingularDialogComponent', () => {
  let component: SingularDialogComponent;
  let fixture: ComponentFixture<SingularDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingularDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingularDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
