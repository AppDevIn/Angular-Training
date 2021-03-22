import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @Input('appDropdown') set open(value: boolean) {
    console.log(value);
    this.isOpen = value;
  }
  @HostBinding('class.show') isOpen = this.open;

  ngOnInit() {
    this.isOpen = this.open;
  }
}
