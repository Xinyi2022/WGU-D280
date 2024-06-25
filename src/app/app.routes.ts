import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { CountryInfoComponent } from './country-info/country-info.component';

export const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'info', component: CountryInfoComponent },
  { path: 'about', component: AboutComponent },
];
