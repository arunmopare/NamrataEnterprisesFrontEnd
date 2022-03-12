import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-services-cards",
  templateUrl: "./services-cards.component.html",
  styleUrls: ["./services-cards.component.css"],
})
export class ServicesCardsComponent implements OnInit {
  ServiceContent = [
    "We enable clients to raise funds through financial institutions and also from capital market.",
    "We help you explore all suitable options of fund raising and securing your assets from different financial institutions so that you avail maximum customized benefits as per your requirements.",
    "Expert advice and unmatched service at every step, with minimal and hassle-free documentation till full & final disbursement.",
    "Assists you to explore the best deals available across the financial market and provide end to end services in processing the funding at attractive interest rates.",
    "We maintain absolute Transparency, Integrity and Commitment in every transaction.",
    "We ensure just-in-time services to our clients. Our industry expertise helps us to cut short the repetitive to and fro between the clients and Financial institutions to a large extent ensuring smooth and hassle free client experience.",
    "Our client-oriented approach and customized walk- through Financial Institutions keeps us on the top priority of our clients and investors.",
  ];
  constructor() {}

  ngOnInit() {}
}
