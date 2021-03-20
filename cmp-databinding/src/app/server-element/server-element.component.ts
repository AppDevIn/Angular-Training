import {
  Component,
  OnInit,
  Input,
  ContentChild,
  ElementRef,
  AfterContentInit,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input() element: {
    type: string;
    name: string;
    content: string;
  };

  @ContentChild("paragraph") paragraph: ElementRef;

  constructor() {}

  ngAfterContentInit(): void {
    console.log(
      "🚀 ~ file: server-element.component.ts ~ line 27 ~ ServerElementComponent ~ paragraph",
      this.paragraph.nativeElement.textContent
    );
  }

  ngOnInit(): void {}
}
