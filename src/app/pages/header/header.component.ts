import { Component, OnInit } from '@angular/core';
import { MenuDataService } from 'src/app/menu-dataservice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// export class HeaderComponent {}

export class HeaderComponent implements OnInit{


  menuArray: any;
  parentLink: any;

  constructor(private data: MenuDataService) {}

  ngOnInit() {
      this.data.currentMenu.subscribe(menuArray => this.menuArray = menuArray)
      this.data.currentParentLink.subscribe(parentLink => this.parentLink = parentLink)
  }



}
