import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { OurServicesComponent } from "./our-services/our-services.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },

  {
    path: "home",
    component: HomeComponent,
    data: {
      title: `Home`,
      description: `"We provide all types of Labours for your Business need. We are a reputed company in Shirwal and Serving various companies since 2015. Some of the services we provide are listed below Forklift Driver, ITI Welder, Fitter, Electrition, Helper, Gardener, House Keepers, etc."`,
      keywords:
        "Namrata Enterprises,Shirwal, Labor contractor,Forklift Driver, ITI Welder, Fitter, Electrician, Helper, Gardener, House Keepers",
    },
  },
  {
    path: "ourservices",
    component: OurServicesComponent,
    data: {
      title: "Our Services",
      description: `We provide all types of Labours for your Business need.

      Some of our services are as follows Forklift Driver, ITI Welder, Fitter, Electrition, Helper, Gardener, House Keepers, etc.`,
      keywords:
        "Namrata Enterprises,Shirwal, Labor contractor,Forklift Driver, ITI Welder, Fitter, Electrician, Helper, Gardener, House Keepers",
    },
  },
  {
    path: "about-us",
    component: AboutUsComponent,
    data: {
      title: "About Us",
      description: `Namrata Enterprises was established in 2015 into the Labours contractor business. Namrata Enterprises believes in providing the best and most skilled laborers for any kind of client requirement. Namrata Enterprises provide all types of Labours for your Business need. We are a reputed company in Shirwal and have been Serving various companies since 2015. Some of the services we provide are listed below Forklift Driver, ITI Welder, Fitter, Electrician, Helper, Gardener, House Keepers, etc.`,
      keywords:
        "Namrata Enterprises,Shirwal, Labor contractor,Forklift Driver, ITI Welder, Fitter, Electrician, Helper, Gardener, House Keepers",
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
