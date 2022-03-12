import { Component, OnInit } from '@angular/core';
import { MetaService } from '../app.SEO.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor(private meta: MetaService) {
    this.meta.updateTitle();
   }

  ngOnInit() {
  }

}
