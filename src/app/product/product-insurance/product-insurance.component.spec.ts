import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInsuranceComponent } from './product-insurance.component';

describe('ProductInsuranceComponent', () => {
  let component: ProductInsuranceComponent;
  let fixture: ComponentFixture<ProductInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
