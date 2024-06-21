import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'country-info',
  standalone: true,
  imports: [],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css'
})
export class CountryInfoComponent {
  data: {
    name: string,
    code: string,
    capitalCity: string,
    incomeLevel: string,
    region: string,
    latitude: string,
    longitude: string,
  } | null | undefined;

  constructor(private sharedService: SharedService) {
    this.sharedService.currentData.subscribe(data => this.data = data);
  }
}
