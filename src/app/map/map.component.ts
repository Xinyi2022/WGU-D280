import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'world-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {

  data: string | null | undefined;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private sharedService: SharedService
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
    console.log(
      'id:', target.getAttribute('id'),
      'title:', target.getAttribute('title')
    );

    this.sharedService.changeData(target.getAttribute('id'));
  }


}
