import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})

export class ClientLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
