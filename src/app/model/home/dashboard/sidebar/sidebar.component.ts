import { Component, OnInit } from '@angular/core';
import { menu_constante } from 'src/app/constas/menu.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  show_menus = menu_constante;
  constructor() {}

  ngOnInit(): void {}
}
