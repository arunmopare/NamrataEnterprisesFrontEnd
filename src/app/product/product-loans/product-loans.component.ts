import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/app.SEO.service';
@Component({
  selector: 'app-product-loans',
  templateUrl: './product-loans.component.html',
  styleUrls: ['./product-loans.component.css']
})
export class ProductLoansComponent implements OnInit {

  constructor(private meta: MetaService) {
    this.meta.updateTitle();
   }

  ngOnInit() {
  }

}
