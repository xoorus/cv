import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
declare function openNav: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public scrollService: ScrollService) { }

  scrollElement = null;

  ngOnInit() {
    this.scrollService.scrollSection.subscribe((value) => {
      this.scrollElement = value;
    });
  }
}
