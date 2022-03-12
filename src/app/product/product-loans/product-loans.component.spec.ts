import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLoansComponent } from './product-loans.component';

describe('ProductLoansComponent', () => {
  let component: ProductLoansComponent;
  let fixture: ComponentFixture<ProductLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
