import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss'],
})
export class NavTopComponent implements OnInit {
  constructor(private location: Location) {}

  back() {
    this.location.back();
  }

  ngOnInit() {}
}
