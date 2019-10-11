import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/Client/Menu/menu.service';
import { Menu } from 'src/app/models/Client/Menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menus: Menu[];
  activeMenu: boolean = false;
  constructor(private service: MenuService) { }

  ngOnInit() {
    this.service.Get().subscribe(menus => this.menus = menus);
  }
  handleScroll(e){
    this.activeMenu = !e.isReachingTop;
  }
}
