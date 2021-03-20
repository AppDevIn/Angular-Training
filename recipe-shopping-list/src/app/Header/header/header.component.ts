import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() navSelected = new EventEmitter<string>();

  selected: string = 'recipe';

  constructor() {}

  ngOnInit(): void {}

  onSelect(value: string) {
    this.selected = value;
    this.navSelected.emit(value);
  }
}
