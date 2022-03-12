import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent,ContactUsPopUp } from "./Base/header/header.component";
import { FooterComponent } from "./Base/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { SliderComponent } from "./home/slider/slider.component";
import { ContactUsComponent, SuccessMessageComponent,ErrorMessageComponent } from "./home/contact-us/contact-us.component";
import { EmiCalculatorComponent } from "./emi-calculator/emi-calculator.component";
import { CalculatorComponent } from "./emi-calculator/calculator/calculator.component";
import { ProductComponent } from "./product/product.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { OurServicesComponent } from "./our-services/our-services.component";
import { ServicesCardsComponent } from "./our-services/services-cards/services-cards.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductLoansComponent } from "./product/product-loans/product-loans.component";

import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';



import { HomeLoansComponent } from "./product/product-loans/home-loans/home-loans.component";
import { MortgageComponent } from "./product/product-loans/mortgage/mortgage.component";
import { ProjectFundingComponent } from "./product/product-loans/project-funding/project-funding.component";
import { WorkingCapitalComponent } from "./product/product-loans/working-capital/working-capital.component";
import { BusinessLoansComponent } from "./product/product-loans/business-loans/business-loans.component";
import { OtherLoansComponent } from "./product/product-loans/other-loans/other-loans.component";
import { ProductInsuranceComponent } from './product/product-insurance/product-insurance.component';
import { LifeInsuranceComponent } from './product/product-insurance/life-insurance/life-insurance.component';
import { GeneralInsuranceComponent } from './product/product-insurance/general-insurance/general-insurance.component';
import { InvestmentBankingComponent } from './product/investment-banking/investment-banking.component';
import { MergerAndAcqComponent } from './product/investment-banking/merger-and-acq/merger-and-acq.component';
import { IpoComponent } from './product/investment-banking/ipo/ipo.component';
import { PrivateEquityComponent } from './product/investment-banking/private-equity/private-equity.component';
import { OthersComponent } from './product/investment-banking/others/others.component';
import { HttpClientModule } from '@angular/common/http';
import { MetaService } from './app.SEO.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    OurServicesComponent,
    ContactUsComponent,
    EmiCalculatorComponent,
    CalculatorComponent,
    ProductComponent,
    ContactUsPopUp,
    AboutUsComponent,
    SuccessMessageComponent,
    ErrorMessageComponent,
    ServicesCardsComponent,
    ProductLoansComponent,
    HomeLoansComponent,
    MortgageComponent,
    ProjectFundingComponent,
    WorkingCapitalComponent,
    BusinessLoansComponent,
    OtherLoansComponent,
    ProductInsuranceComponent,
    LifeInsuranceComponent,
    GeneralInsuranceComponent,
    InvestmentBankingComponent,
    MergerAndAcqComponent,
    IpoComponent,
    PrivateEquityComponent,
    OthersComponent,
    PageNotFoundComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  entryComponents: [SuccessMessageComponent,ErrorMessageComponent,ContactUsPopUp],
  providers: [MetaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
