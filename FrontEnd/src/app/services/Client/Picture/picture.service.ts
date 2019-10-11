import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Picture } from 'src/app/models/Client/Picture';
import { pictureData } from 'src/app/data/Client/data';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor() { }

  GetLatestPicture(): Observable<Picture[]>{
    return of(pictureData);
  }
}
