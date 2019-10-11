import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Notify } from 'src/app/models/Client/Notify';
import { notifyData } from 'src/app/data/Client/data';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() { }

  Get(): Observable<Notify>{
    return of(notifyData);
  }
}
