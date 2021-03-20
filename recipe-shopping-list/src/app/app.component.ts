import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  selected: string = 'recipe';

  constructor() {}

  ngOnInit() {}

  onNavSelected(selcted: string) {
    this.selected = selcted;
  }
}
