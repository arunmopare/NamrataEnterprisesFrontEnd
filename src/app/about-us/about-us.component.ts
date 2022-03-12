import { Component, OnInit } from '@angular/core';
import { MetaService } from '../app.SEO.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private meta: MetaService) {
    this.meta.updateTitle();
   }

  ngOnInit() {
  }

}
