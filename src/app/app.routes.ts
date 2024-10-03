import { Routes } from '@angular/router';
import { HomeComponent } from "./public/pages/home/home.component";
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import { BundleInformationComponent } from "./store/pages/bundle-information/bundle-information.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'store/bundles', component: BundleInformationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
