import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  onMenuClick() {
    let sideMenu = document.getElementById('sideMenuBar');
    let header = document.getElementById('header');
    if (!header) {
      return;
    }
    if (!sideMenu) {
      return;
    }
    sideMenu.style.setProperty('width','0px !important')
    if (sideMenu.offsetWidth > 1) {
      console.log('coming')
      sideMenu.style.width = '0px';
      header.style.width = '100vw';
    } else {
      sideMenu.style.width = '16rem';
      header.style.width = 'calc(100% - 16rem)';
    }
  }
}
