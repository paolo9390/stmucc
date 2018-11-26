import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusteesDialogComponent } from './trustees-dialog.component';

describe('TrusteesDialogComponent', () => {
  let component: TrusteesDialogComponent;
  let fixture: ComponentFixture<TrusteesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrusteesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrusteesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
