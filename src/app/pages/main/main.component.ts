import { Component, OnInit } from '@angular/core';
import { MenuDataService } from 'src/app/menu-dataservice';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit{


  // menuArray: any;

  private pocMenuArray = [
    {'menulink': '#areas', 'menuname': 'Areas'},
    {'menulink': '#team', 'menuname': 'Team'},
    {'menulink': '#contact', 'menuname': 'Contact'},
  ];

  constructor(private data: MenuDataService) {}

  ngOnInit() {
      // this.data.currentMenu.subscribe(menuArray => this.menuArray = menuArray)
      this.data.changeMenu(this.pocMenuArray)
      this.data.changeParentLink({})
  }
}
