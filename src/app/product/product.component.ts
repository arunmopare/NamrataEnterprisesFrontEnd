import { Component, OnInit } from '@angular/core';
import { MetaService } from '../app.SEO.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private meta: MetaService) {
    this.meta.updateTitle();
    this.meta.updateMetaInfo();
   }

  ngOnInit() {
  }

}
