import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footerv2Component } from './footerv2.component';

describe('Footerv2Component', () => {
  let component: Footerv2Component;
  let fixture: ComponentFixture<Footerv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footerv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footerv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
