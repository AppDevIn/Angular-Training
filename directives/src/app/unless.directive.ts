import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective {
  @Input("appUnless") set unless(value: boolean) {
    if (!value) {
      this.vcRef.createEmbeddedView(this.templeteRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private templeteRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
