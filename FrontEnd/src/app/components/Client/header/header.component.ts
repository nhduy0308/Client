import { Component, OnInit } from '@angular/core';
import { Notify } from 'src/app/models/Client/Notify';
import { NotifyService } from 'src/app/services/Client/Notify/notify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notify: Notify;
  constructor(private service: NotifyService) { }

  ngOnInit() {
    this.service.Get().subscribe(noti => this.notify = noti);
  }

}
