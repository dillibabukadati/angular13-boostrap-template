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
    let bodyContent = document.getElementById('body-content');
    console.log(bodyContent)
    if (!header) {
      return;
    }
    if (!sideMenu) {
      return;
    }
    sideMenu.style.setProperty('width', '0px !important');
    if (sideMenu.offsetWidth > 1) {
      sideMenu.style.width = '0px';
      header.style.width = '100vw';
      bodyContent.style.left = '0';
    } else {
      sideMenu.style.width = '16rem';
      header.style.width = 'calc(100% - 16rem)';
      bodyContent.style.left = '16rem';
    }
  }
}
