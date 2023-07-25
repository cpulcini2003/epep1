import { Component, OnInit } from '@angular/core';
import { MenuDataService } from 'src/app/menu-dataservice';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})

export class PocComponent implements OnInit{


  // menuArray: any;

  private pocMenuArray = [
    {'menulink': '#pocmainpage', 'menuname': 'Introduction'},
    {'menulink': '#pocnews', 'menuname': 'Contents'},
  ];

  constructor(private data: MenuDataService) {}

  ngOnInit() {
      // this.data.currentMenu.subscribe(menuArray => this.menuArray = menuArray)
      this.data.changeMenu(this.pocMenuArray)
      this.data.changeParentLink({'link': '/main-page', 'label': 'HOME'})
  }
}
