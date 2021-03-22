import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBasicHighLight]",
})
export class BasicHightlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.background = "green";
  }
}
