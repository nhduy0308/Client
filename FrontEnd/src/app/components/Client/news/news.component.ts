import { Component, OnInit } from '@angular/core';
import { NewsGroup } from 'src/app/models/Client/NewsGroup';
import { NewsService } from 'src/app/services/Client/News/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newGroup: NewsGroup[];
  active: NewsGroup;
  constructor(private service: NewsService) { }

  ngOnInit() {
    this.service.GetLastNew().subscribe(g => {
      this.newGroup = g;
      if(this.newGroup.length > 0){
        this.active = this.newGroup[0];
      }
    });
  }

  onTabClick(group: NewsGroup): void{
    this.active = group;
  }

}
