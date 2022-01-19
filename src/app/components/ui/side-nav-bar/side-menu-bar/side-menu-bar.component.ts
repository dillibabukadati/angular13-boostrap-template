import {Component, OnInit} from '@angular/core';
import {MenuItem} from "./side-bar-menu-model";

@Component({
  selector: 'app-side-menu-bar',
  templateUrl: './side-menu-bar.component.html',
  styleUrls: ['./side-menu-bar.component.scss']
})
export class SideMenuBarComponent implements OnInit {

  sideMenu: MenuItem[] = [
    {
      title: 'Home',
      type: "group",
    }, {
      title: 'Dashboard',
      type: "basic",
      icon: `heroicons_outline:home`
    }, {
      title: 'Profile',
      type: "basic",
      icon: `heroicons_outline:user`
    }, {
      title: "",
      type: "divider"
    },
    {
      title: 'Users',
      type: "collapsable",
      icon: `heroicons_outline:users`,
      children: [
        {
          title: 'Add User',
          type: 'basic',
          icon: 'heroicons_outline:user'
        },
        {
          title: 'All Users',
          type: 'basic',
          icon: 'heroicons_outline:users'
        }
      ]
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
