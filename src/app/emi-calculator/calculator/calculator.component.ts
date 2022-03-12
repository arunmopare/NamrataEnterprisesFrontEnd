import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  loanAmt = 1000000;
  r;
  t;
  rate = 10.5;
  tenure = 10;
  emi;
  totalPayableInterest;
  totalPayment;

  emiStr: string;
  totalPayableInterestStr: string;
  totalPaymentStr: string;

  numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) {
      x = x.replace(pattern, '$1,$2');
    }
    return x;
  }


  constructor() { }

  ngOnInit() {

    this.r = this.rate / (12 * 100);
    this.t = this.tenure * 12;
    const middleCal = Math.pow((1 + this.r), this.t);

    // Calculate Emi
    this.emi = Math.floor(this.loanAmt * this.r * (middleCal / (middleCal - 1)));
    this.totalPayableInterest = (this.t * this.emi) - this.loanAmt;
    this.totalPayment = this.loanAmt + this.totalPayableInterest;

    this.emiStr = this.numberWithCommas(this.emi);
    this.totalPayableInterestStr = this.numberWithCommas(this.totalPayableInterest);
    this.totalPaymentStr = this.numberWithCommas(this.totalPayment);

    this.drawChart();
  }

  emiCalculator() {

    // Rate per month
    this.r = this.rate / (12 * 100);
    this.t = this.tenure * 12;
    const middleCal = Math.pow((1 + this.r), this.t);

    // Calculate Emi
    this.emi = Math.floor(this.loanAmt * this.r * (middleCal / (middleCal - 1)));
    this.totalPayableInterest = (this.t * this.emi) - this.loanAmt;
    this.totalPayment = this.loanAmt + this.totalPayableInterest;

    // String Values for result
    this.emiStr = this.numberWithCommas(this.emi);
    this.totalPayableInterestStr = this.numberWithCommas(this.totalPayableInterest);
    this.totalPaymentStr = this.numberWithCommas(this.totalPayment);
    console.log(this.totalPaymentStr);

    this.drawChart();
  }

  drawChart() {
    // To Draw Pie-chart
    var myPie = new Chart('myChart', {
      type: 'pie',
      data: {
        labels: ['Loan Amount', 'Total Payable Interest'],
        datasets: [{
          backgroundColor: ['#efaa30', '#50c8ea'],
          data: [this.loanAmt, this.totalPayableInterest]
        }],
      },

      options: {
        title: {
          display: true,
          text: 'Break-up of Total Payment',
          fontStyle: 'bold',
          fontSize: 20
        },
        legend: {
          position: 'bottom',
          align: 'center'
        },
        cutoutPercentage: 0,
        tooltips: {
          callbacks: {
            // this callback is used to create the tooltip label
            label: function (tooltipItem, data) {
              // get the data label and data value to display
              // convert the data value to local string so it uses a comma seperated number
              var dataLabel = data.labels[tooltipItem.index];
              var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toLocaleString();

              // make this isn't a multi-line label (e.g. [["label 1 - line 1, "line 2, ], [etc...]])
              if (Chart.helpers.isArray(dataLabel)) {
                // show value on first line of multiline label
                // need to clone because we are changing the value
                dataLabel = dataLabel.slice();
                dataLabel[0] += value;
              } else {
                dataLabel += value;
              }

              // return the text to display on the tooltip
              return dataLabel;
            }
          }
        }
      }
    });
  }
}
