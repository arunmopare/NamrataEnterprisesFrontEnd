import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLoansComponent } from './other-loans.component';

describe('OtherLoansComponent', () => {
  let component: OtherLoansComponent;
  let fixture: ComponentFixture<OtherLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
