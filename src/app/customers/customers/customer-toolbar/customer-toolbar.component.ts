import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../generalService';

@Component({
  selector: 'app-customer-toolbar',
  templateUrl: './customer-toolbar.component.html',
  styleUrls: ['./customer-toolbar.component.less']
})
export class CustomerToolbarComponent implements OnInit {
  cardViewButton;
  listViewButton;


  constructor(private gs: GeneralService) { }

  ngOnInit() {
    this.cardViewButton = false;
    this.listViewButton = true;
  }

  toggleViewCard(e) {
    this.listViewButton = true; // disabled
    this.cardViewButton = false;
    this.gs.changeView('card');
  }

  toggleViewList(e) {
    this.cardViewButton = true; // disabled
    this.listViewButton = false;
    this.gs.changeView('list');
  }
}
