import { Component, OnInit } from '@angular/core';
import { MetaService } from '../app.SEO.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private meta: MetaService) {
    this.meta.updateTitle();
    this.meta.updateMetaInfo();

   }


  ngOnInit() {
  }

}
