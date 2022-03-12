import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-services-cards",
  templateUrl: "./services-cards.component.html",
  styleUrls: ["./services-cards.component.css"],
})
export class ServicesCardsComponent implements OnInit {
  ServiceContent = [
    "We provide all types of Labours for your Business need.",
    "Some of our services are as follows Forklift Driver, ITI Welder, Fitter, Electrition, Helper, Gardener, House Keepers, etc.",
    "Namrata Enterprises is a Team of experts, we provide optimal solutions for all kinds of industrial needs.",
    "We provide all kinds of Industrial Supplies and tools for all your business needs",
    "We maintain absolute Transparency, Integrity and Commitment in every transaction.",
    "We are a reputed company in Shirwal and have been Serving various companies since 2015",
  ];
  constructor() {}

  ngOnInit() {}
}
