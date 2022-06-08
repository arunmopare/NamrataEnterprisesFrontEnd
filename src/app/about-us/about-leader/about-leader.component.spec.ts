import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLeaderComponent } from './about-leader.component';

describe('AboutLeaderComponent', () => {
  let component: AboutLeaderComponent;
  let fixture: ComponentFixture<AboutLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
