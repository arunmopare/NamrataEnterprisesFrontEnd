import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { EmiCalculatorComponent } from "./emi-calculator/emi-calculator.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { OurServicesComponent } from "./our-services/our-services.component";
import { ProductLoansComponent } from "./product/product-loans/product-loans.component";
import { ProductInsuranceComponent } from "./product/product-insurance/product-insurance.component";
import { InvestmentBankingComponent } from "./product/investment-banking/investment-banking.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  {
    path: "home",
    component: HomeComponent,
    data: {
      title: `Home`,
      description: `We specialize in services that bring in values to the corporates as well to their stakeholders (Internal & External) thus becoming a value adding enterprise for all your financial needs!! Varad Fincorp believes in breaking boundaries that restrict corporates and individuals to explore options into the financial space. We help overcome constraints like dealing with financial institutions including all Private Banks, Public Sector & Co-operative Banks, Non-Banking Financial Corporations and Insurance companies.`,
      keywords:
        ",home,Home loan, Mortgage, Project funding, Working capital, Bussiness loans, Otherl,Life insurance, general insurance, other insurance,Merger and acquisition, Initial public offers, Equity based funding, Valuations,Right issues, Debt syndication and restructuring",
    },
  },
  {
    path: "ourservices",
    component: OurServicesComponent,
    data: {
      title: "Our Services",
      description: `Helps you explore all suitable options of fund raising and securing your assets from different financial institutions so that you avail maximum customized benefits as per your requirements. We enable clients to raise funds through financial institutions and also from capital market. We maintain absolute Transparency, Integrity and Commitment in every transaction.`,
      keywords:
        "Namrata Enterprises,home,Home loan, Mortgage, Project funding, Working capital, Bussiness loans, Otherl,Life insurance, general insurance, other insurance,Merger and acquisition, Initial public offers, Equity based funding, Valuations,Right issues, Debt syndication and restructuring",
    },
  },
  {
    path: "about-us",
    component: AboutUsComponent,
    data: {
      title: "About Us",
      description: `Vision : “To be an organization that is recognized, respected and trusted by clients, employees, business partners and investors. Our vision is to be a leading financial services company in India by creating high quality, affordable and innovative solutions in Financial Consulting and Services.” Mission : “Our Mission is to build confidence & trust of our clients through professional approach to our clients and providing services that exceeds expectations".`,
      keywords:
        "Namrata Enterprises,home,Home loan, Mortgage, Project funding, Working capital, Bussiness loans, Otherl,Life insurance, general insurance, other insurance,Merger and acquisition, Initial public offers, Equity based funding, Valuations,Right issues, Debt syndication and restructuring",
    },
  },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
