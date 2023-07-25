import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MenuDataService {

    private defaultMenuArray = [
        // {'menulink': '#areas', 'menuname': 'Areas'},
        // {'menulink': '#news', 'menuname': 'News'},
        // {'menulink': '#about', 'menuname': 'About'},
        // {'menulink': '#team', 'menuname': 'Team'},
        // {'menulink': '#contact', 'menuname': 'Contact'},
      ];

    private navigationArray = new BehaviorSubject<any>(this.defaultMenuArray);
    currentMenu = this.navigationArray.asObservable();
      

    // private defaultParentLink = {'link': '#areas', 'label': 'Main'}
    private defaultParentLink = {}
      
    private parentLink = new BehaviorSubject<any>(this.defaultParentLink);
    currentParentLink = this.parentLink.asObservable();

    constructor() {}

    changeMenu(menuArray: any) {
        this.navigationArray.next(menuArray)
    }

    changeParentLink(parentLink: any) {
        this.parentLink.next(parentLink)
    }
}