import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { SharedService } from '../shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'world-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {

  data: {
    name: string,
    code: string,
    capitalCity: string,
    incomeLevel: string,
    region: string,
    latitude: string,
    longitude: string,
  } | null | undefined;


  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private sharedService: SharedService,
    private http: HttpClient
  ) {
    this.sharedService.currentData.subscribe(data => this.data = data);
  }

  ngAfterViewInit(): void {
    this.loadMap();
  }

  loadMap() {
    const paths = this.elementRef.nativeElement.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      this.renderer.listen(path, 'mouseover', this.onMouseOver.bind(this));
      this.renderer.listen(path, 'mouseout', this.onMouseOut.bind(this));
      this.renderer.listen(path, 'click', this.onMouseClick.bind(this));
    });
  }

  onMouseOver(event: MouseEvent): void {
    const target = event.target as SVGPathElement;
    target.style.fill = 'red';
  }

  onMouseOut(event: MouseEvent): void {
    const target = event.target as SVGPathElement;
    target.style.fill = 'black';
  }

  onMouseClick(event: MouseEvent): void {
    const target = event.target as SVGPathElement;
    this.callWorldBank(target.getAttribute('id'));
  }

  callWorldBank(country_code: string | null) {
    if (country_code == null) {
      return;
    }
    const url = `https://api.worldbank.org/v2/country/${country_code}?format=json`;
    this.http.get<any>(url).subscribe(
      response => {
        const countryInfo = response[1][0];
        this.sharedService.changeData({
          name: countryInfo.name,
          code: countryInfo.id,
          capitalCity: countryInfo.capitalCity,
          incomeLevel: countryInfo.incomeLevel.value,
          region: countryInfo.region.value,
          latitude: countryInfo.latitude,
          longitude: countryInfo.longitude,
        });
      },
      error => {
        console.error('error:', error);
      }
    );
  }
}
