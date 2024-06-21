import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataSource = new BehaviorSubject<{
    name: string,
    code: string,
    capitalCity: string,
    incomeLevel: string,
    region: string,
    latitude: string,
    longitude: string,
  } | null | undefined>(null);
  currentData = this.dataSource.asObservable();

  changeData(data: {
    name: string,
    code: string,
    capitalCity: string,
    incomeLevel: string,
    region: string,
    latitude: string,
    longitude: string,
  } | null | undefined) {
    this.dataSource.next(data);
  }
}