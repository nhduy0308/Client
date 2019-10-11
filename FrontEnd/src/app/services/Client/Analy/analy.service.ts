import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Analy } from 'src/app/models/Client/Analy';
import { analyData } from 'src/app/data/Client/data';

@Injectable({
  providedIn: 'root'
})
export class AnalyService {

  constructor() { }

  Get(): Observable<Analy>{
    return of(analyData);
  }
}
