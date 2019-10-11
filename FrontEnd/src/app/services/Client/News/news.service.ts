import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News } from 'src/app/models/Client/News';
import { newsBoxData, lastNewData, recentNewsData } from 'src/app/data/Client/data';
import { NewsGroup } from 'src/app/models/Client/NewsGroup';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  GetNewBox(): Observable<News[]>{
    return of(newsBoxData);
  }

  GetLastNew(): Observable<NewsGroup[]>{
    return of(lastNewData);
  }

  GetRecentNews(): Observable<News[]>{
    return of(recentNewsData);
  }
}
