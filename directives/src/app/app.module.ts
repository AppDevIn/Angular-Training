import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BasicHightlightDirective } from "./basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from './better-highLight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [AppComponent, BasicHightlightDirective, BetterHighlightDirective, UnlessDirective, DropdownDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
