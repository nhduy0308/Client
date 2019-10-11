import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { menuData } from 'src/app/data/Client/data';
import { Menu } from 'src/app/models/Client/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  Get(): Observable<Menu[]> {
    return of(menuData);
  }
}
