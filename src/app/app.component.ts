import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;

  ngOnInit() {
    // this.testService.testFunction();
  }

  // ⤵️ Add the HostListener decorator and onViewportScroll() method
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {

    const navbarCollapsible = document.body.querySelector('#mainNav');
    // alert("Hello! I am an alert box inside angular!!");
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }

  }

}
