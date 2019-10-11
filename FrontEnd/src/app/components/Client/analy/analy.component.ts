import { Component, OnInit } from '@angular/core';
import { Analy } from 'src/app/models/Client/Analy';
import { AnalyService } from 'src/app/services/Client/Analy/analy.service';

@Component({
  selector: 'app-analy',
  templateUrl: './analy.component.html',
  styleUrls: ['./analy.component.scss']
})
export class AnalyComponent implements OnInit {
  analy: Analy;
  constructor(private service: AnalyService) { }

  ngOnInit() {
    this.service.Get().subscribe(a => this.analy = a);
  }

}
