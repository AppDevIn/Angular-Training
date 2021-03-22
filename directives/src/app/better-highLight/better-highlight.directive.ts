import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input("dc") defaultColor: string = "transparent";
  @Input() highlight: string = "yellow";
  @HostBinding("style.backgroundColor") backgroundColor: string = this
    .defaultColor;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseover() {
    this.backgroundColor = this.highlight;
  }

  @HostListener("mouseout") mouseLeave() {
    // this.renderer.setStyle(
    //   this.el.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = this.defaultColor;
  }
}
