import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './map/map.component'
import { CountryInfoComponent } from './country-info/country-info.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, CountryInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'world-map';
}
