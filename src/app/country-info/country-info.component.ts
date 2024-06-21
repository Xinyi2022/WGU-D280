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
  data: string | null | undefined;

  constructor(private sharedService: SharedService) {
    this.sharedService.currentData.subscribe(data => this.data = data);
  }
}
