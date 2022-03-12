import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/app.SEO.service';

@Component({
  selector: 'app-product-insurance',
  templateUrl: './product-insurance.component.html',
  styleUrls: ['./product-insurance.component.css']
})
export class ProductInsuranceComponent implements OnInit {

  constructor(private meta: MetaService) {
    this.meta.updateTitle();
   }

  ngOnInit() {
  }

}
