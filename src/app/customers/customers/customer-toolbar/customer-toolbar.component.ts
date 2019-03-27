import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-customer-toolbar',
  templateUrl: './customer-toolbar.component.html',
  styleUrls: ['./customer-toolbar.component.less']
})
export class CustomerToolbarComponent implements OnInit {
  // @ViewChild('cardViewButton')
  cardViewButton;

  // @ViewChild('listViewButton')
  listViewButton;

  constructor() { }

  ngOnInit() {
    this.cardViewButton = false;
    this.listViewButton = true;
  }

  toggleViewCard(e) {
    this.listViewButton = true; // disabled
    this.cardViewButton = false;
  }

  toggleViewList(e) {
    this.cardViewButton = true; // disabled
    this.listViewButton = false;
  }
}
