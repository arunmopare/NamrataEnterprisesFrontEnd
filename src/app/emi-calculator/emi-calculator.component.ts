import { Component, OnInit } from '@angular/core';
import { MetaService } from '../app.SEO.service';
@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {
  constructor(private meta: MetaService) {
    this.meta.updateTitle();
   }


  ngOnInit() {
    
  }
}
