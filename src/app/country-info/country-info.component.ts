import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'country-info',
  standalone: true,
  imports: [RouterModule],
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
