import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.scss'],
})
export class ItemFilterComponent implements OnInit {

  @Input() optionFilter: any = {};
  @Input() filterActived: number;

  constructor() { }

  ngOnInit() {}

}
