import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFundingComponent } from './project-funding.component';

describe('ProjectFundingComponent', () => {
  let component: ProjectFundingComponent;
  let fixture: ComponentFixture<ProjectFundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
