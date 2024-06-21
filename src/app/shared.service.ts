import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private dataSource = new BehaviorSubject<string | null>(null);
  currentData = this.dataSource.asObservable();

  changeData(data: string | null) {
    this.dataSource.next(data);
  }
}