import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navLinks: any[] = [];

  constructor() { }

  ngOnInit() {
    this.navLinks = [
      { path: '/users', label: 'User' },
      { path: '/graph', label: 'Graph' },
    ];
  }

}
