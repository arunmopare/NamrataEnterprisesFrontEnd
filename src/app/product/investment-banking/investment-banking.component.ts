import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/app.SEO.service';
@Component({
  selector: 'app-investment-banking',
  templateUrl: './investment-banking.component.html',
  styleUrls: ['./investment-banking.component.css']
})
export class InvestmentBankingComponent implements OnInit {

  constructor(private meta: MetaService) {
    this.meta.updateTitle();
   }

  ngOnInit() {
  }

}
