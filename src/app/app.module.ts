import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  HeaderComponent,
  ContactUsPopUp,
} from "./Base/header/header.component";
import { FooterComponent } from "./Base/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { SliderComponent } from "./home/slider/slider.component";
import {
  ContactUsComponent,
  SuccessMessageComponent,
  ErrorMessageComponent,
} from "./home/contact-us/contact-us.component";

import { AboutUsComponent } from "./about-us/about-us.component";
import { OurServicesComponent } from "./our-services/our-services.component";
import { ServicesCardsComponent } from "./our-services/services-cards/services-cards.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";

import { HttpClientModule } from "@angular/common/http";
import { MetaService } from "./app.SEO.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AboutLeaderComponent } from './about-us/about-leader/about-leader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    OurServicesComponent,
    ContactUsComponent,

    ContactUsPopUp,
    AboutUsComponent,
    SuccessMessageComponent,
    ErrorMessageComponent,
    ServicesCardsComponent,
    PageNotFoundComponent,
    AboutLeaderComponent,
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
    MatDialogModule,
  ],
  entryComponents: [
    SuccessMessageComponent,
    ErrorMessageComponent,
    ContactUsPopUp,
  ],
  providers: [MetaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
