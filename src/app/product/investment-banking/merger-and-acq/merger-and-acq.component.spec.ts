import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergerAndAcqComponent } from './merger-and-acq.component';

describe('MergerAndAcqComponent', () => {
  let component: MergerAndAcqComponent;
  let fixture: ComponentFixture<MergerAndAcqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergerAndAcqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergerAndAcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
