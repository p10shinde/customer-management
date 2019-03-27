import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.less']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  customers = [
    { name: 'ABC', city: 'City1', state: 'State1', icon: '', address: 'address1 address1 address1',
    'orderT': 207.78, viewO: 'View Orders'},
    { name: 'DEF', city: 'City2', state: 'State2', icon: '', address: 'address2 address2 address2',
    'orderT': 215.78, viewO: 'View Orders'},
    { name: 'GEH', city: 'City3', state: 'State3', icon: '', address: 'address3 address3 address3',
    'orderT': 327.78, viewO: 'View Orders'},
    { name: 'ADS', city: 'City1', state: 'State1', icon: '', address: 'address4 address4 address4',
    'orderT': 2340.12, viewO: 'View Orders'},
    { name: 'GEW', city: 'City4', state: 'State4', icon: '', address: 'address5 address5 address5',
    'orderT': 1928.43, viewO: 'View Orders'},
    { name: 'BFE', city: 'City3', state: 'State3', icon: '', address: 'address6 address6 address6',
    'orderT': 1982.33, viewO: 'View Orders'},
    { name: 'KOL', city: 'City2', state: 'State2', icon: '', address: 'address7 address7 address7',
    'orderT': 975.45, viewO: 'View Orders'},
    { name: 'POK', city: 'City1', state: 'State1', icon: '', address: 'address8 address8 address8',
    'orderT': 9384.1, viewO: 'View Orders'},
    { name: 'LNJ', city: 'City5', state: 'State5', icon: '', address: 'address9 address9 address9',
    'orderT': 23, viewO: 'View Orders'},
    { name: 'PLI', city: 'City4', state: 'State4', icon: '', address: 'address10 address10 address10',
    'orderT': 8374.3, viewO: 'View Orders'}
  ];

  displayedColumns: string[] = ['icon', 'name', 'city', 'state', 'address', 'orderT', 'viewO'];


  ngOnInit() {
  }

}
