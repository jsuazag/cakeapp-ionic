import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss'],
})
export class ItemFilterComponent implements OnInit {

  public icon: string = "assets/icons/cake.png";

  constructor() { }

  ngOnInit() {}

}
