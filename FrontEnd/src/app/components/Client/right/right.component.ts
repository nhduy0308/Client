import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/Client/News/news.service';
import { News } from 'src/app/models/Client/News';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {
  recentNews: News[];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.GetRecentNews().subscribe(news => this.recentNews = news);
  }

}
