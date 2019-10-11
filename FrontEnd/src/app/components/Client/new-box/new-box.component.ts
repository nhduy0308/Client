import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/Client/News';
import { NewsService } from 'src/app/services/Client/News/news.service';

@Component({
  selector: 'app-new-box',
  templateUrl: './new-box.component.html',
  styleUrls: ['./new-box.component.scss']
})
export class NewBoxComponent implements OnInit {
  news: News[];
  activeNew: News;
  active: string;
  constructor(private service: NewsService) { }

  ngOnInit() {
    this.service.GetNewBox().subscribe(n => {
      this.news = n;
      if(this.news.length > 0){
        this.activeNew = this.news[0];
        this.active = this.activeNew.id;
      }
    });
  }

  onClick(n: News): void{
    console.log(n);
    this.active = n.id;
    this.activeNew = n;
  }

}
